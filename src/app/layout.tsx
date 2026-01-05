import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roberto Aguero",
  description: "Roberto Aguero portfolio",
  icons: {
    icon: [
      { url: "/assets/favico/favicon.ico" },
      { url: "/assets/favico/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favico/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/favico/apple-touch-icon.png",
  },
  manifest: "/assets/favico/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
