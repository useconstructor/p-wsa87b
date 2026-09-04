import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taskflow - Ship work that moves your business',
  description: 'The collaborative project management platform for distributed engineering and product teams. Real-time visibility, AI-powered insights, and seamless integrations.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0F0F13] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
