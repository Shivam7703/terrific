import type { Metadata } from 'next';
import { Berkshire_Swash } from 'next/font/google'; // Import the Berkshire Swash font
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import { footer } from '@/data/homeData';

// Import the font with proper subsets
const font1 = Berkshire_Swash({
  weight: ["400"], // Adjust weights if needed
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font1"
});


export const metadata: Metadata = {
  title: 'Terrific Travels',
  description: 'Developed in Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font1.variable} bg-white`}>
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
