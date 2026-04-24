# Digital Incubator

# 1. Cấu trúc repo
```
digital-incubator/
│
├── .github/                              # ⚙️ GitHub Actions & Templates
│   ├── workflows/                        # CI/CD pipelines (ci.yml, cd-staging.yml, release.yml...)
│   ├── ISSUE_TEMPLATE/                   # Bug report, Feature request...
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── CODEOWNERS                        # Phân quyền review code
│   ├── dependabot.yml                    # Auto-update thư viện
│   └── FUNDING.yml
│
├── apps/                                 # 🖥️ User-facing Applications
│   ├── web/                              # Next.js 14 App Router (Main App)
│   │   ├── src/app/                      # (auth), (dashboard), (marketing), api/
│   │   ├── src/components/               # ui/, features/, layout/, shared/
│   │   ├── src/hooks/                    # Custom React hooks
│   │   ├── src/lib/                      # Utilities, API client
│   │   ├── src/store/                    # Zustand stores
│   │   ├── src/services/                 # API service layer
│   │   └── public/, tests/, tailwind.config.ts...
│   ├── admin/                            # Next.js (Admin Dashboard)
│   │   └── src/app/                      # users/, courses/, projects/, analytics/
│   └── mobile/                           # (Future) React Native App
│
├── packages/                             # 📦 Shared Internal Packages (Monorepo)
│   ├── ui/                               # Shared UI components & tailwind config
│   ├── config/                           # Shared ESLint, TypeScript, Tailwind configs
│   ├── types/                            # Shared TypeScript interfaces & models
│   ├── utils/                            # Shared helper functions (date, string, validation)
│   ├── api-client/                       # Auto-generated API SDK từ OpenAPI
│   └── database/                         # Shared Prisma Client
│
├── services/                             # 🚀 Backend Microservices
│   ├── api/                              # NestJS (Main Backend API)
│   │   ├── src/modules/                  # auth, users, projects, roadmap, courses, ai-mentor...
│   │   ├── src/common/                   # decorators, filters, guards, interceptors
│   │   ├── src/queue/                    # BullMQ (email.processor, ai-evaluation)
│   │   └── src/websocket/                # Socket.io (chat.gateway)
│   ├── ai-service/                       # FastAPI Python (AI Engine)
│   │   ├── app/core/                     # RAG pipeline, LLM agents, Vectorstore
│   │   ├── app/api/endpoints/            # chat.py, roadmap.py, evaluate.py
│   │   ├── data/                         # Knowledge base (legal, guides...)
│   │   └── notebooks/                    # Jupyter experiments
│   ├── crawler-service/                  # Python Scrapy (Course Crawler)
│   │   └── app/spiders/                  # coursera_spider, udemy_spider...
│   └── notification-service/             # Node.js (Email/Push Notifications)
│
├── database/                             # 🗄️ Database Management
│   ├── prisma/
│   │   ├── schema.prisma                 # Lược đồ gộp chính
│   │   ├── migrations/                   # Lịch sử thay đổi DB
│   │   └── seed.ts                       # Orchestrator cho việc seed data
│   ├── schemas/                          # Lược đồ chia nhỏ (user.prisma, ai.prisma...)
│   ├── seeds/                            # Dữ liệu mẫu (users.seed, courses.seed...)
│   └── scripts/                          # Backup, Restore, Reset scripts
│
├── infrastructure/                       # ☁️ DevOps & Cloud Infrastructure
│   ├── docker/                           # Nginx, Postgres, Redis configs
│   ├── kubernetes/                       # K8s Manifests (base/, overlays/, helm/)
│   ├── terraform/                        # IaC cho AWS/GCP (vpc/, rds/, eks/)
│   ├── monitoring/                       # Prometheus, Grafana dashboards, Alerts
│   └── ansible/                          # Server config management
│
├── design/                               # 🎨 Design System & Assets
│   ├── figma/                            # Design tokens, exports (wireframes, mockups)
│   ├── assets/                           # logo/, icons/, illustrations/, brand/
│   ├── ui-kit/                           # Docs về colors, typography, spacing
│   └── user-flows/                       # Sơ đồ luồng (onboarding, roadmap generation)
│
├── docs/                                 # 📚 Project Documentation
│   ├── architecture/                     # System diagram, C4 model, ADRs, Data flow
│   ├── api/                              # OpenAPI yaml, Postman collection
│   ├── database/                         # ERD diagrams, Schema descriptions
│   ├── features/                         # Specs chi tiết từng tính năng
│   ├── guides/                           # Setup local, deployment, git workflow
│   ├── ai/                               # RAG strategy, Prompt engineering, Crawler rules
│   └── business/                         # BRD, User personas, Metrics & KPIs
│
├── tests/                                # 🧪 Global Testing
│   ├── e2e/                              # Playwright (auth.spec, roadmap-flow.spec)
│   ├── load/                             # K6/Artillery (api-load, ai-stress)
│   └── fixtures/                         # Mock data dùng chung
│
├── .editorconfig                         # Cấu hình IDE chung
├── .env.example                          # Biến môi trường mẫu
├── .eslintrc.js                          # Root ESLint config
├── .gitattributes                        # Cấu hình Git (xử lý dòng, LFS)
├── .gitignore                            # Root Git ignore
├── .nvmrc                                # Khóa version Node.js
├── .prettierrc                           # Root Prettier config
├── CHANGELOG.md                          # Lịch sử release
├── CODE_OF_CONDUCT.md                    # Quy tắc ứng xử
├── commitlint.config.js                  # Quy tắc viết commit message
├── CONTRIBUTING.md                       # Hướng dẫn đóng góp code
├── docker-compose.yml                    # Chạy toàn bộ hệ thống ở Local (Dev)
├── docker-compose.prod.yml               # Docker Compose cho Production
├── LICENSE                               # Giấy phép mã nguồn
├── package.json                          # Root package (quản lý scripts cho toàn Monorepo)
├── pnpm-workspace.yaml                   # Khai báo các packages và apps cho pnpm
├── README.md                             # Trang bìa của dự án
├── SECURITY.md                           # Chính sách báo cáo bảo mật
└── turbo.json                            # Cấu hình Turborepo (cache, pipeline build)
```
