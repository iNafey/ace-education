import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Ace Educate",
  description: "Ultimate online tutoring platfom for UK GCSEs and A-levels, focused on career mentorship",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-background text-foreground min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
