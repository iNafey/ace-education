import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "TutorPro - Your Path to Interview Success",
  description: "Master coding interviews with our AI-powered tutoring platform",
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
