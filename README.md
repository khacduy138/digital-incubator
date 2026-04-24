<div align="center">

# 🌱 Digital Incubator – Vườn Ươm Số Hóa

**Nền tảng vườn ươm khởi nghiệp số giúp sinh viên và nhóm khởi nghiệp đi từ ý tưởng thô đến startup thực chiến thông qua quy trình chuẩn hóa và AI Mentor 24/7.**

[![CI](https://github.com/your-org/digital-incubator/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/digital-incubator/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10-red.svg)](https://nestjs.com/)

[Demo](https://incubator.vn) · [Documentation](./docs) · [Report Bug](https://github.com/your-org/digital-incubator/issues) · [Request Feature](https://github.com/your-org/digital-incubator/issues)

</div>

---

## 📖 Về dự án

**Digital Incubator** giải quyết 3 vấn đề cốt lõi mà sinh viên khởi nghiệp Việt Nam đang gặp phải:

1. 🧭 **"Không biết làm gì tiếp theo?"** → Lộ trình chuẩn hóa từ ý tưởng đến MVP
2. 👨‍🏫 **"Không có mentor?"** → AI Co-Founder 24/7 dựa trên RAG
3. 📊 **"Làm việc rời rạc?"** → Workspace quản lý tiến độ tập trung

### ✨ 3 Tính năng cốt lõi (MVP)

| Tính năng                     | Mô tả ngắn                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------ |
| 🗺️ **Startup Roadmap Engine** | AI phân tích ý tưởng → đề xuất lộ trình học + module phù hợp từ Coursera/Udemy |
| 🤖 **AI Co-Founder**          | Chatbot RAG đóng vai trò mentor, teaching assistant, critic, planner           |
| 📋 **Startup Workspace**      | Checklist, task management, document storage, progress dashboard               |

---

## 🏗️ Kiến trúc hệ thống

```text
+-------------------------------------------------------------------------+
| EXPERIENCE LAYER | Next.js Web App | Admin Dashboard | (Future) Mobile  |
+------------------------------------+------------------------------------+
                                     | API
+------------------------------------v------------------------------------+
| GATEWAY (NestJS) | Auth | Rate Limit | Validation | WebSocket           |
+---+----------+---------+---------+---------+----------------------------+
    |          |         |         |         |
+---v----+ +---v---+ +---v---+ +---v---+ +---v---+  +-------+ +----+ +-------+
|Notifier| |  API  | |Service| |Service| |Service|  | Core  | | AI | |Crawler|
|        | |       | |       | |       | |       |  |FastAPI| |Py  | |Node.js|
+---+----+ +---+---+ +---+---+ +---+---+ +---+---+  +-------+ +----+ +-------+
    |          |         |         |         |
+---v----------v---------v---------v---------v----------------------------+
| PostgreSQL | Redis | Qdrant (Vector) | S3/MinIO                         |
+-------------------------------------------------------------------------+
```

Chi tiết: [`docs/architecture/overview.md`](./docs/architecture/overview.md)

---

## 🛠️ Tech Stack

<table>
<tr>
<td><b>Frontend</b></td>
<td>Next.js 14 · TypeScript · TailwindCSS · shadcn/ui · Zustand · TanStack Query</td>
</tr>
<tr>
<td><b>Backend</b></td>
<td>NestJS · Prisma · PostgreSQL · Redis · BullMQ · Socket.io</td>
</tr>
<tr>
<td><b>AI/ML</b></td>
<td>FastAPI · LangChain · OpenAI · Qdrant · pgvector</td>
</tr>
<tr>
<td><b>DevOps</b></td>
<td>Docker · Kubernetes · Terraform · GitHub Actions · Sentry</td>
</tr>
<tr>
<td><b>Tooling</b></td>
<td>pnpm · Turborepo · ESLint · Prettier · Husky · Commitlint</td>
</tr>
</table>

---

## 🚀 Quick Start

### Yêu cầu hệ thống

- **Node.js** ≥ 20.x ([nvm](https://github.com/nvm-sh/nvm) recommended)
- **pnpm** ≥ 8.x (`npm install -g pnpm`)
- **Python** ≥ 3.11
- **Docker** & **Docker Compose**
- **PostgreSQL** 16+ (hoặc dùng Docker)

### Cài đặt

````bash
# 1. Clone repository
git clone https://github.com/your-org/digital-incubator.git
cd digital-incubator

# 2. Cài dependencies
pnpm install

# 3. Copy biến môi trường
cp .env.example .env

# 4. Khởi động services (Postgres, Redis, Qdrant)
docker compose up -d

# 5. Chạy database migrations
pnpm db:migrate
pnpm db:seed

# 6. Start dev environment (all services)
pnpm dev

### Sau khi chạy, truy cập:

* 🌐 **Web App:** [http://localhost:3000](http://localhost:3000)
* 🛠️ **Admin:** [http://localhost:3001](http://localhost:3001)
* 🔧 **API Docs:** [http://localhost:4000/api/docs](http://localhost:4000/api/docs)
* 🤖 **AI Service:** [http://localhost:8000/docs](http://localhost:8000/docs)

---

### 📂 Cấu trúc dự án

```text
digital-incubator/
├── apps/                # Next.js apps (web, admin)
├── services/            # Backend services (api, ai-service, crawler)
├── packages/            # Shared packages (ui, types, config)
├── database/            # Prisma schema, migrations, seeds
├── infrastructure/      # Docker, K8s, Terraform
├── design/              # Figma exports, brand assets
├── docs/                # Documentation
└── scripts/             # Utility scripts
````

Chi tiết: `docs/architecture/overview.md`

### 🧪 Testing

```bash
pnpm test              # Unit tests
pnpm test:e2e          # E2E tests (Playwright)
pnpm test:coverage     # Coverage report
```

### 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) trước khi bắt đầu.

#### Quy trình tóm tắt

1. **Fork** repo
2. **Tạo branch:** `git checkout -b feat/ten-tinh-nang`
3. **Commit** theo [Conventional Commits](https://www.conventionalcommits.org/): `feat(scope): mô tả`
4. **Push** và tạo **Pull Request**

### 👥 Team

| Vai trò       | Người phụ trách |
| :------------ | :-------------- |
| Product Owner | TBD             |
| Tech Lead     | TBD             |
| Backend Lead  | TBD             |
| Frontend Lead | TBD             |
| AI Lead       | TBD             |

---

### 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
