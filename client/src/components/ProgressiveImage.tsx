import { useEffect, useRef, useState, useMemo } from "react";
import { ImageIcon } from "lucide-react";

interface ProgressiveImageProps {
  src: string;
  placeholder: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function ProgressiveImage({
  src,
  placeholder,
  alt,
  aspectRatio = "auto",
  className = "",
  fallback,
}: ProgressiveImageProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Create IntersectionObserver with rootMargin for early loading
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Clean up observer once image is in view
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    observerRef.current.observe(img);

    // Cleanup function to prevent memory leaks
    return () => {
      observerRef.current?.disconnect();
    };
  }, []); // Empty dependency array - runs once on mount

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError("Failed to load image");
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
      ref={imgRef}
    >
      {/* Placeholder (always visible initially) */}
      <img
        src={placeholder}
        alt=""
        aria-hidden="true"
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-500 ease-out
          ${isLoaded ? "opacity-0" : "opacity-100"}
        `}
        style={{
          filter: isLoaded ? "blur(0px)" : "blur(10px)",
          transform: "scale(1.1)", // Slight scale to hide edges during blur
          willChange: "filter, opacity",
        }}
      />

      {/* Full image (loads when in view) */}
      {isInView && !error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-500 ease-out
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
          style={{
            filter: isLoaded ? "blur(0px)" : "blur(10px)",
            willChange: "filter, opacity",
          }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted border border-border/50">
          {fallback || (
            <div className="text-center">
              <ImageIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Failed to load image</p>
            </div>
          )}
        </div>
      )}

      {/* Loading indicator (optional) */}
      {isInView && !isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
