import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientLayout";

// export const metadata: Metadata = {
//   title: "Wena Project",
//   description: "A project from IDEAISCAPITAL",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <body className="font-sans antialiased">

  <ClientLayout>{children}</ClientLayout>
  </body>
  </html>);
}
