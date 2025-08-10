import type { Metadata } from 'next';
import { Figtree, Urbanist } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  title: 'Fametonic - Turn Social Media Into a Profitable Career',
  description:
    'Join Fametonic to transform your social media presence into a profitable career. Expert-led courses, AI assistance, and personalized insights for aspiring influencers.',
  keywords: [
    'social media influencer',
    'social media career',
    'career media',
    'social media',
    'influencer career',
    'tiktok money',
    'earn money from tiktok',
    'instagram',
    'earn money from instagram',
    'content creation',
    'content creator life',
  ],
  icons: {
    icon: '/fametonic-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
