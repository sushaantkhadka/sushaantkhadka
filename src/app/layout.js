import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sushant Khadka",
  description: "I am a UiUx Designer & Frontend Developer.",
  openGraph: {
    title: "Sushant's Portfolio",
    image: {
      url: "https://khadkasushant.com.np/image/preview-portfolio.png",
      alt: "Hi, I am Sushant Khadka. I am a UiUx Designer & Frontend Developer. Click to visit website.",
      type: "image/png",
    },
    description: "Project by Sushant Khadka",
    url: "", // Add your URL here
    type: "website",
  },
  twitter: {
    card: "summary",
  },
  meta: [
    {
      name: "description",
      content:
        "I'm the Michelangelo of graphics, chiseling visuals that leap out of the screen and dance a tango with your eyeballs. Logos, icons, illustrations – you name it, I'll make it so captivating that even Picasso would be jealous. Click to visit website.",
    },
    { name: "theme-color", content: "#000000" },
    {
      name: "keywords",
      content:
        "HTML, CSS, JavaScript,next.js, react, Portfolio, Sushant Khadka, animation, particles, constellation, frontend, chatgpt, cool, website",
    },
    { name: "author", content: "Sushant Khadka" },
    { charset: "UTF-8" },
    { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
