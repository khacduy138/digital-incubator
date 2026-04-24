import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

import { QueryProvider } from '@/providers/QueryProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Digital Incubator – Vườn Ươm Số Hóa',
    template: '%s | Digital Incubator',
  },
  description:
    'Nền tảng vườn ươm khởi nghiệp số giúp sinh viên đi từ ý tưởng thô đến startup thực chiến với AI Mentor 24/7.',
  keywords: ['startup', 'khởi nghiệp', 'vườn ươm', 'AI mentor', 'sinh viên', 'Việt Nam'],
  authors: [{ name: 'Digital Incubator Team' }],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://incubator.vn',
    siteName: 'Digital Incubator',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          jakarta.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <QueryProvider>
            {children}
            <Toaster richColors position="top-right" />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
