# HackRest - Modern Web Development Portfolio

![HackRest](image.png)

A professional portfolio and service website for HackRest, a software development company specializing in modern web technologies, mobile development, and digital solutions.

## 🚀 Features

- **Modern UI/UX**: Built with Next.js, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Performance Optimized**: Fast loading and rendering for optimal user experience
- **SEO Friendly**: Built-in SEO optimization with customized metadata
- **Smooth Animations**: Professional animations using Framer Motion
- **Interactive Components**: Rich UI components from shadcn/ui library
- **Contact Form**: Integrated email functionality using Resend API
- **Blog System**: Built-in blog capabilities for content marketing
- **Projects Showcase**: Portfolio section to showcase your work
- **Service Pages**: Detailed pages for each service offering
- **Pricing Plans**: Transparent pricing structure with toggle between monthly/yearly
- **Modern E-commerce Support**: Ready for online store implementation

## 📋 Pages

- **Home**: Main landing page with hero, services, work process, and other sections
- **Projects**: Portfolio showcasing past work
- **Blog**: Content marketing platform
- **Services**: Detail pages for different service offerings
- **Pricing**: Transparent pricing plans with yearly/monthly toggle
- **Contact**: Contact form with email integration
- **About Me**: Personal information page

## 🧩 Components

The project is organized into reusable components:

### Layout Components
- Main Navigation
- Footer
- Gradient Wrapper
- Logo

### Section Components
- Hero Section
- Services Section
- Work Process
- Tech Stack
- Testimonials
- FAQ
- Call-to-Action
- Stats Section
- and more...

### UI Components
- Comprehensive UI library built with shadcn/ui
- Custom theme with light/dark mode support
- Interactive elements with accessibility support

## 🛠️ Technologies

- **Framework**: [Next.js](https://nextjs.org/) (v13.5)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Email Integration**: [Resend](https://resend.io/)
- **Form Validation**: [Zod](https://github.com/colinhacks/zod)
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hackrest.git
   cd hackrest
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   RESEND_API_KEY=your_resend_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Configuration

### Email Integration

The contact form uses Resend for email delivery. To configure this:

1. Sign up for a [Resend](https://resend.io/) account
2. Create an API key
3. Add it to your `.env.local` file as `RESEND_API_KEY`

### Google Analytics

Google Analytics is already integrated. To use your own account:

1. Replace the tracking ID in `app/layout.tsx` with your Google Analytics ID

## 🎨 Customization

### Theme

- Edit the theme in `tailwind.config.ts` to change colors and other design elements
- Modify the global styles in `styles/globals.css`

### Content

- Update services in `config/services.ts`
- Add projects to the projects data file
- Modify text content throughout the components as needed

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop
- Large screens

## 🧪 Code Quality

- ESLint for code linting
- TypeScript for type checking
- Organized file structure for maintainability

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**HackRest**
- Website: [hackrest.com](https://hackrest.com)
- Email: info@hackrest.com

---

Made with ❤️ by HackRest 