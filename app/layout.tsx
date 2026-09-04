import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788534251307',
  description: 'Taskflow is a dark, conversion-focused SaaS landing page for a collaborative project management platform serving distributed engineering and product teams. It will highlight AI-powered insights, real-time visibility, integrations, social proof, and transparent pricing with animated product UI mockups.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0F0F13', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
