# 16edge - Data-Driven Marketing Website

![16edge](image.png)

A professional marketing website for 16edge, a performance marketing agency specializing in data-driven campaigns, SEO, social media marketing, and digital growth strategies.

## 🚀 Features

- **Modern UI/UX**: Built with Next.js 13, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully optimized for all device sizes and screen types
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Performance Optimized**: Lightning-fast loading with static generation
- **SEO Friendly**: Built-in SEO optimization with customized metadata and sitemap
- **Smooth Animations**: Professional animations using Framer Motion
- **Interactive Components**: Rich UI components from shadcn/ui library
- **Contact Form**: Integrated email functionality using Resend API
- **Service-Focused**: Dedicated pages for each marketing service offering
- **Portfolio Showcase**: Case studies and client testimonials

## 📋 Pages

- **Home**: Landing page with hero, services overview, why choose us, and CTA sections
- **About**: Company information and approach methodology
- **Portfolio**: Case studies, client work, and testimonials
- **Services**: Overview of all marketing services
  - Performance Marketing
  - SEO (Search Engine Optimization)
  - Social Media Marketing
  - Website Development
  - Branding
  - Strategy & Consulting
- **Contact**: Contact form with email integration
- **Privacy Policy**: GDPR-compliant privacy information
- **Terms of Service**: Legal terms and conditions

## 🧩 Components

The project is organized into reusable components:

### Layout Components
- Main Navigation with Services Dropdown
- Footer with Contact Information
- Gradient Wrapper
- Logo Component

### Section Components
- Hero Section with Dynamic Text
- Services Grid
- Why Choose Us
- Call-to-Action (CTA)
- Contact Forms

### UI Components
- Comprehensive UI library built with shadcn/ui
- Custom theme with light/dark mode support
- Interactive elements with accessibility support

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 13.5 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom configuration
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Email Service**: [Resend](https://resend.io/)
- **Validation**: [Zod](https://github.com/colinhacks/zod)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/16edge/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_APP_URL=https://16edge.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Configuration

### Email Integration

The contact form uses Resend for email delivery:

1. Sign up at [Resend](https://resend.io/)
2. Create an API key from your dashboard
3. Add `RESEND_API_KEY` to your `.env.local` file
4. Update recipient email in `app/api/email/route.ts` if needed

### Google Tag Manager

GTM is integrated for analytics tracking. Update the GTM ID in `app/layout.tsx` to use your own container.

## 🎨 Customization

### Brand Colors

Edit your brand colors in `tailwind.config.ts`:
```typescript
colors: {
  maroon: { ... },
  burgundy: { ... }
}
```

### Services

Update services data in `config/services.ts` to modify service offerings displayed throughout the site.

### Content

- **Homepage**: Edit sections in `components/sections/`
- **About Page**: Modify `app/(site)/about/about-content.tsx`
- **Service Pages**: Update files in `app/(site)/services/[service-name]/`
- **Contact Info**: Update emails and contact details in relevant components

## 📱 Responsive Design

Fully responsive with mobile-first approach:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1440px
- Large: > 1440px

## 🧪 Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Static type checking
- **File Structure**: Organized by feature and component type

## 📄 License

All rights reserved © 2025 16edge

## 👥 Contact

**16edge**
- Website: [16edge.com](https://16edge.com)
- Email: info@16edge.com

---

Built with Next.js and Tailwind CSS | Powered by AI-driven marketing strategies 