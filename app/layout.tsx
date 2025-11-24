import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Sushant Khadka",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="mb-16 mt-12 pt-4 mx-auto sticky top-0 z-50 w-fit">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
