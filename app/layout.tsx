import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Wena Project",
  description: "A project from IDEAISCAPITAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
