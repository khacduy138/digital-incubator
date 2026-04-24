# 🏗️ Architecture Overview

## 1. High-Level Architecture

Digital Incubator áp dụng kiến trúc **3 lớp** theo đúng đề án:

### Lớp 1: Experience & Ecosystem Layer
- **Next.js Web App** (`apps/web`): Giao diện sinh viên
- **Admin Dashboard** (`apps/admin`): Quản trị
- **Mobile** (future): React Native

### Lớp 2: Process Layer (Core Business Logic)
- **NestJS API Gateway** (`services/api`):
  - Authentication, Authorization
  - Project management
  - Roadmap orchestration
  - Workspace (tasks, checklists, documents)
  - Rate limiting, validation
  - WebSocket for real-time

### Lớp 3: Knowledge & AI Layer
- **FastAPI AI Service** (`services/ai-service`):
  - RAG pipeline
  - LLM orchestration (OpenAI, Claude)
  - Roadmap generation
  - MVP evaluation
- **Crawler Service** (`services/crawler-service`):
  - Crawl Coursera, Udemy, edX
  - Data cleaning & deduplication

## 2. Data Layer

- **PostgreSQL**: Transactional data (users, projects, tasks)
- **pgvector**: Course embeddings (semantic search)
- **Qdrant**: RAG knowledge base (scalable vector search)
- **Redis**: Cache, session, job queue (BullMQ)
- **MinIO/S3**: User uploads (MVP files, documents)

## 3. Request Flow Example – AI Mentor Chat
```
User → Web App → API Gateway (auth, rate-limit) ↓ AI Service 
                                                ↓ 
                                        ┌───────┴───────┐ 
                                        ↓               ↓ 
                                      Qdrant         OpenAI
                                    (retrieve)     (generate)
                                        ↓               ↓
                                        └───────┬───────┘
                                                ↓ 
                                      Response + Citations 
                                                ↓ 
                                       Save to PostgreSQL 
                                                ↓ 
                                      Stream back to User

```
## 4. Deployment Topology

- **Development**: Docker Compose (tất cả local)
- **Staging**: Kubernetes trên single cluster
- **Production**: Multi-AZ Kubernetes + managed services (RDS, ElastiCache)

See [`adr/`](./adr/) for detailed decision records.
