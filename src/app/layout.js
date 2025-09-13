import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Guide for Guides",
  description: "Plan your dream vacation with our expert travel guides. Find local guides for authentic travel experiences.",
  keywords: "travel, guides, vacation, tourism, local guides, travel planning",
  openGraph: {
    title: "Guide for Guides",
    description: "Plan your dream vacation with our expert travel guides",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/643af6c505f1d176c5142a6d/643af6c505f1d12eb7142aa4_fav-32.png" />
        <link rel="apple-touch-icon" href="/assets/643af6c505f1d176c5142a6d/643af6c505f1d114bd142aa3_fav-256.png" />
        <link rel="stylesheet" href="/webflow.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" />
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8bed5.js" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous" defer></script>
        <script src="https://uploads-ssl.webflow.com/643af6c505f1d176c5142a6d/js/webflow.103e33dd8.js" type="text/javascript" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" defer></script>
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
