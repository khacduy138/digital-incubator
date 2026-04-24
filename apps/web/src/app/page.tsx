import Link from 'next/link';
import { ArrowRight, Bot, Compass, LayoutDashboard, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ═══════════ HEADER ═══════════ */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-brand-600" />
            <span className="font-display text-xl font-bold">Digital Incubator</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#features" className="hover:text-brand-600">
              Tính năng
            </Link>
            <Link href="#how-it-works" className="hover:text-brand-600">
              Cách hoạt động
            </Link>
            <Link href="#pricing" className="hover:text-brand-600">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Đăng nhập</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Bắt đầu miễn phí</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span>AI Mentor 24/7 đã sẵn sàng</span>
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-6xl lg:text-7xl">
              Từ <span className="gradient-brand bg-clip-text text-transparent">ý tưởng thô</span>{' '}
              đến <br />
              startup thực chiến
            </h1>
            <p className="mb-8 text-balance text-lg text-muted-foreground md:text-xl">
              Nền tảng vườn ươm số hóa với quy trình chuẩn hóa và AI Co-Founder đồng hành suốt hành
              trình khởi nghiệp của bạn.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/register">
                  Khởi tạo dự án miễn phí
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Khám phá tính năng</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section id="features" className="border-t bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">3 công cụ, 1 hành trình</h2>
            <p className="text-lg text-muted-foreground">
              Tất cả những gì bạn cần để biến ý tưởng thành startup
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border bg-card p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Digital Incubator. Made with ❤️ in Vietnam.</p>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: Compass,
    title: 'Startup Roadmap Engine',
    description:
      'AI phân tích ý tưởng của bạn và đề xuất lộ trình học tập cá nhân hóa từ Coursera, Udemy và các trường đại học hàng đầu.',
  },
  {
    icon: Bot,
    title: 'AI Co-Founder 24/7',
    description:
      'Chatbot RAG đóng vai trò mentor, teaching assistant, người phản biện ý tưởng và trợ lý gợi ý bước tiếp theo.',
  },
  {
    icon: LayoutDashboard,
    title: 'Startup Workspace',
    description:
      'Quản lý checklist, nhiệm vụ từng thành viên, tài liệu và tiến độ dự án trong một không gian tập trung.',
  },
];
