# Guide-for-Guides - Next.js Migration

A modern Next.js-based travel website for connecting travelers with local guides. Successfully migrated from a basic HTML/CSS/JavaScript project to a production-ready Next.js application deployable on Vercel.

## 🌟 Features

- **Home Page**: Hero section with call-to-action, about section, FAQs, and footer
- **Guide Directory**: Browse available travel guides with their specialties and contact options
- **User Authentication**: Sign up and login pages for travelers
- **Guide Registration**: Dedicated signup page for travel guides
- **Payment Integration**: Payment gateway for accessing guide contact details
- **Responsive Design**: Works seamlessly across devices
- **SEO Optimized**: Proper metadata and Next.js optimizations

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
Guide_for_Guides_new/
├── public/
│   ├── assets/                 # Migrated Webflow assets
│   ├── original/              # Original HTML files (reference)
│   └── logo.jpg               # Site logo
├── src/
│   ├── app/
│   │   ├── directory/         # Guide directory page
│   │   ├── login/             # User login page
│   │   ├── payment/           # Payment gateway page
│   │   ├── signup/            # User signup page
│   │   ├── signup-guide/      # Guide registration page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.js          # Root layout with metadata
│   │   └── page.js            # Home page
│   └── styles/
│       └── webflow.css        # Migrated Webflow styles
├── package.json
└── README.md
```

## 🔧 Technologies Used

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: JavaScript (ES6+)
- **Styling**: CSS with styled-jsx + Tailwind CSS
- **Fonts**: Google Fonts (Montserrat)
- **Images**: Next.js Image optimization
- **Deployment**: Vercel-ready

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel:**
   - Push code to GitHub repository
   - Import project in Vercel dashboard
   - Deploy automatically

2. **Manual Deployment:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy to Vercel
   vercel
   ```

## 🎯 Pages Overview

- **/** - Homepage with hero section, about, and FAQs
- **/directory** - Browse available travel guides
- **/login** - User authentication
- **/signup** - User registration
- **/signup-guide** - Guide registration
- **/payment** - Payment gateway for premium features

## 🔗 Original Project

This project was migrated from a basic HTML/CSS/JS website created during **HACKOWASP 5.0** at Thapar Institute of Engineering and Technology.

**Original Team:**
1. Uttkarsh Singh Pathania (Team Leader)
2. Devansh
3. Siddhant Mathur
4. Aayush Singh
5. Abhimanyu Kumar

---

**Built with ❤️ using Next.js and ready for Vercel deployment**
