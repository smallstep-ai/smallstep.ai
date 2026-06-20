import type { Metadata } from "next";
import "./globals.css";
import { generalSans, inter } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${generalSans.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KMYS89JMFP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KMYS89JMFP');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
