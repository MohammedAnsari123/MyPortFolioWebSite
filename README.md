# Futuristic & Dynamic Portfolio Website

A high-performance, responsive portfolio website built for **Mohammed Ansari** to showcase full-stack development skills, projects, and system-building philosophy.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Directory)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: Nodemailer (SMTP)

## ✨ Features

- **Dynamic Hero Section**: Typing effects, animated gradients, and glassmorphism UI.
- **Component-Based Architecture**: Modular components for Header, Hero, About, Skills, Projects, Experience, and Contact.
- **Interactive UI**: Smooth scroll-triggered animations and hover effects.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Working Contact Form**: Integrated with `nodemailer` to send real emails directly from the portfolio.
- **SEO Optimized**: Meta tags and semantic HTML structure.

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory to configure the email service (required for the contact form):

```env
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
```

*Note: If using Gmail, you must generate an [App Password](https://myaccount.google.com/apppasswords).*

### Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Sign up/Log in to Vercel and "Import Project".
3. **Important**: In the Vercel Project Settings, go to **Environment Variables** and add the same variables from your `.env.local` (`EMAIL_USER`, `EMAIL_PASS`, etc.).
4. Click **Deploy**.

## 📂 Project Structure

```
├── app/
│   ├── api/            # Backend API routes (Contact form)
│   ├── components/     # Reusable UI components (Hero, Navbar, etc)
│   ├── globals.css     # Global styles & Tailwind configuration
│   ├── layout.tsx      # Root layout & Metadata
│   └── page.tsx        # Main landing page assembly
├── public/             # Static assets
└── ...
```

## 🎨 Theme & Design

The site uses a custom "Deep Space & Neon" palette defined in `globals.css`:
- **Primary**: Deep Space Black (`#0B0F1A`) & Soft White (`#E5E7EB`)
- **Accents**: Neon Cyan (`#00F5FF`), Electric Purple (`#7F5AF0`)

---

Designed and built by **Mohammed Ansari**.
