# Alayham Taha - Portfolio 2026

A modern, animated portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Features

### Design & UX
- **Dual Theme Support**: Light and dark mode with smooth transitions
- **Advanced Animations**: 
  - Scroll-triggered section reveals
  - Parallax effects in hero section
  - Staggered card animations
  - Hover interactions throughout
  - Gradient text animations
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Custom Scrollbar**: Themed scrollbar with accent colors
- **Smooth Scrolling**: Native smooth scroll behavior

### Performance
- **Progressive Image Loading**: Blur-up technique with IntersectionObserver
- **Lazy Loading**: Images load only when in viewport
- **Optimized Animations**: Memoized variants for better performance
- **Production Ready**: Tree-shaking, code splitting, and minification

### Technical Stack
- **Frontend**: React 19, TypeScript, Vite 5
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Animations**: Framer Motion 12
- **Routing**: Wouter (lightweight router)
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized configuration)

## 🚀 Deployment to Vercel

### Prerequisites
- Vercel account (free tier is sufficient)
- GitHub/GitLab/Bitbucket repository with your code

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "feat: complete portfolio redesign with animations"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings

3. **Configure Build Settings** (if not auto-detected)
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~1-2 minutes)
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (Optional)

If you want to add analytics or other integrations, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then update the variables as needed.

## 🛠️ Local Development

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run check        # TypeScript type checking
npm run format       # Format code with Prettier
```

## 📁 Project Structure

```
alayham_portfolio/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # shadcn/ui primitives
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── BackToTop.tsx
│   │   │   ├── ProjectGallery.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── ...
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx   # Main portfolio page
│   │   │   └── NotFound.tsx
│   │   ├── contexts/      # React contexts
│   │   │   └── ThemeContext.tsx
│   │   ├── data/          # Data files
│   │   │   └── projects.ts
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities
│   │   │   └── utils.ts
│   │   ├── App.tsx        # Main app component
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Global styles & animations
│   ├── public/            # Static assets
│   │   ├── images/        # Images (WebP format)
│   │   └── favicon.svg    # Favicon
│   └── index.html         # HTML template
├── api/                   # Serverless API (optional)
│   └── index.ts
├── vercel.json            # Vercel deployment config
└── package.json
```

## 🎨 Customization

### Updating Personal Information

Edit `client/src/pages/Home.tsx`:
- Name, title, and bio in the Hero section
- Contact information (email, phone, location)
- Social media links (GitHub, LinkedIn)

### Updating Projects

Edit `client/src/data/projects.ts`:
- Add/remove projects
- Update project details (title, description, tech stack, links)
- Update images in `client/public/images/projects/`

### Updating Certifications

Edit `client/src/data/projects.ts`:
- Modify the `certifications` array
- Add certification images to `client/public/images/certifications/`

### Changing Colors

Edit `client/src/index.css`:
- Light theme variables in `:root`
- Dark theme variables in `.dark`
- Main accent color: `--accent` (default: electric cyan `188 100% 50%`)

### Modifying Animations

Animations are powered by Framer Motion. Key files:
- `client/src/pages/Home.tsx` - Section animations
- `client/src/components/ProjectGallery.tsx` - Card animations
- `client/src/index.css` - CSS animations (float, shimmer, gradient)

## ✨ Animation Features

### Scroll-Triggered Animations
- Sections fade in as you scroll
- Staggered reveals for cards and lists
- Parallax effects in hero section

### Hover Interactions
- Cards lift on hover (`y: -8, scale: 1.02`)
- Buttons scale and shift
- Navigation links show underline animation
- Skills and tags have magnetic hover effects

### Continuous Animations
- Decorative orbs float infinitely
- Gradient text shifts colors
- Scroll progress indicator at top

## 📱 Mobile Optimizations

- Responsive navigation with smaller text and spacing
- Touch-optimized hover states (`touch-manipulation`)
- Adjusted button sizes for better tap targets
- Flexible grid layouts (1 col mobile → 3 col desktop)
- Back-to-top button positioned for thumb reach

## 🔧 Performance Optimizations

- **Memoized animation variants** - Prevents unnecessary re-renders
- **IntersectionObserver for images** - Lazy loads with 200px preloading margin
- **Will-change CSS property** - GPU-accelerated animations
- **Optimized bundle size** - ~487KB JS (152KB gzipped)
- **Asset caching headers** - 1 year immutable for static assets in vercel.json

## 🚀 Production Checklist

Before deploying to production:

- ✅ TypeScript type checking passes (`npm run check`)
- ✅ Production build succeeds (`npm run build`)
- ✅ All images are optimized (WebP format)
- ✅ Favicon is present (`/favicon.svg`)
- ✅ SEO meta tags are updated in `index.html`
- ✅ Social links are correct
- ✅ Contact information is accurate
- ✅ Project URLs are valid
- ✅ Analytics configured (optional)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

- **Email**: alayham543279@gmail.com
- **Phone**: +963 953 971 735
- **Location**: Damascus, Syria
- **LinkedIn**: [alayham-taha](https://www.linkedin.com/in/alayham-taha-8bb369277/)
- **GitHub**: [AlayhamTaha543](https://github.com/AlayhamTaha543)

---

Built with ❤️ using React, TypeScript, Vite, Tailwind CSS, and Framer Motion
