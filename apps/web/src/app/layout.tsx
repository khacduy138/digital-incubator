import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin', 'vietnamese'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Digital Incubator',
  description: 'Vườn ươm số hóa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={cn('min-h-screen bg-gray-50 font-sans antialiased', inter.variable, jakarta.variable)}>
        {/* Chỉ render nội dung chính, tạm bỏ các hiệu ứng râu ria để phục vụ Demo */}
        {children}
      </body>
    </html>
  );
}
