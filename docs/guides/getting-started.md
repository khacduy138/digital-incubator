# 🚀 Getting Started Guide

Hướng dẫn setup môi trường local để phát triển Digital Incubator.

## Prerequisites

### 1. Cài đặt tools bắt buộc

```
# Node.js 20+
nvm install 20
nvm use 20

# pnpm
npm install -g pnpm@8

# Docker Desktop
# macOS: brew install --cask docker
# Windows: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

# Python 3.11+ (cho AI service)
brew install python@3.11  # macOS
```

### 2. Clone repository

```
git clone [https://github.com/your-org/digital-incubator.git](https://github.com/your-org/digital-incubator.git)
cd digital-incubator
```

### 3. Setup environment variables

```
cp .env.example .env
```

Mở `.env` và điền:

* `OPENAI_API_KEY`: Lấy từ [https://platform.openai.com](https://platform.openai.com)
* Các biến khác có thể giữ default cho local dev

### 4. Install dependencies

```
pnpm install
```

### 5. Start infrastructure (Postgres, Redis, Qdrant, MinIO)

```
pnpm docker:up
```

Đợi ~30s để services khởi động, check:

```
docker compose ps
```

### 6. Setup database

```
pnpm db:generate      # Generate Prisma Client
pnpm db:migrate       # Run migrations
pnpm db:seed          # Insert demo data
```

### 7. Setup AI service (Python)

```
cd services/ai-service
python -m venv venv
source venv/bin/activate  # macOS/Linux
# venv\Scripts\activate   # Windows
pip install -r requirements.txt
cd ../..
```

### 8. Start dev environment

```
pnpm dev
```

Hoặc chạy từng service riêng:

```
pnpm --filter @incubator/web dev
pnpm --filter @incubator/api dev
```

## Accessing services

| Service | URL |
| :--- | :--- |
| Web App | http://localhost:3000 |
| Admin | http://localhost:3001 |
| API Docs (Swagger) | http://localhost:4000/api/docs |
| AI Docs | http://localhost:8000/docs |
| Prisma Studio | http://localhost:5555 (pnpm db:studio) |
| MinIO Console | http://localhost:9001 (admin/minioadmin) |
| Mailhog | http://localhost:8025 |

## Default accounts (from seed)

* **Admin:** admin@incubator.vn / Admin@123456
* **Student:** nguyenvana@student.vn / Student@123

## Common Tasks

### Reset database

```
pnpm db:reset
```

### Run tests

```
pnpm test
pnpm test:e2e
```

### Format code

```
pnpm format
```

### Generate types from Prisma schema changes

```
pnpm db:generate
```

## Troubleshooting

### Port conflicts

Nếu port bị chiếm, sửa trong `docker-compose.yml` và `.env`.

### Prisma error "Can't reach database"

```
docker compose restart postgres
```

### Clear everything

```
pnpm clean
docker compose down -v
pnpm install
```
