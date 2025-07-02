// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css'; // Your global styles
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer

export const metadata: Metadata = {
  title: 'Mescius - Modern Solutions',
  description: 'A modern, dynamic component website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header /> {/* The Header is now correctly placed */}
        <main>{children}</main>
        <Footer /> {/* The Footer is now correctly placed */}
      </body>
    </html>
  );
}