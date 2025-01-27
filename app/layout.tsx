import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "PostureSmart",
  description: "Correct your posture with Ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.posturesm.art" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="PostureSmart" />
        <meta property="og:description" content="Correct your posture with Ai" />
        <meta property="og:image" content="https://www.posturesm.art/icons/icon-96.png" />
        <meta property="og:url" content="https://www.posturesm.art" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="PostureSmart" />
        <meta name="twitter:description" content="Correct your posture with Ai" />
        <meta name="twitter:image" content="https://www.posturesm.art/icons/icon-128.png" />
      </head>
      <GoogleAnalytics gaId="G-3Q7FK0H4T2" />
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
