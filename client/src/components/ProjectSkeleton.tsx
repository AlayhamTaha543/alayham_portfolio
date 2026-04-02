import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

export default function ProjectSkeleton() {
  return (
    <div className="group cursor-pointer transition-all duration-300" aria-hidden="true">
      <Card className="bg-card border-border overflow-hidden transition-all duration-300" role="presentation">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image Skeleton */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-muted animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/50 to-transparent shimmer" />
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Title Skeleton */}
              <div className="h-8 bg-muted rounded animate-pulse w-3/4" />
              
              {/* Description Skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse w-full" />
                <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
              </div>

              {/* Tags Skeleton */}
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 bg-muted rounded animate-pulse w-20"
                  />
                ))}
              </div>
            </div>

            {/* Actions Skeleton */}
            <div className="flex gap-3 pt-6">
              <div className="h-10 bg-muted rounded animate-pulse w-24" />
              <div className="h-10 bg-muted rounded animate-pulse w-20" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Gallery skeleton for multiple projects
export function ProjectGallerySkeleton() {
  return (
    <div className="space-y-8" aria-hidden="true">
      {[1, 2, 3].map((i) => (
        <ProjectSkeleton key={i} />
      ))}
    </div>
  );
}
