# Contributing to Digital Incubator

Cảm ơn bạn đã quan tâm đến việc đóng góp cho Digital Incubator! 🎉

## 📋 Mục lục

- [Code of Conduct](#code-of-conduct)
- [Quy trình đóng góp](#quy-trình-đóng-góp)
- [Git Workflow](#git-workflow)
- [Commit Convention](#commit-convention)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

Dự án này tuân theo [Code of Conduct](./CODE_OF_CONDUCT.md). Vui lòng đọc và tuân thủ.

## Quy trình đóng góp

### 1. Tạo Issue trước khi code

- Tìm kiếm issue tương tự đã có chưa
- Dùng template phù hợp (bug / feature / tech debt)
- Đợi maintainer assign hoặc approve trước khi bắt đầu

### 2. Setup môi trường local

Xem [Getting Started Guide](./docs/guides/getting-started.md).

## Git Workflow

Chúng tôi dùng **Git Flow** cải tiến:

| Branch | Mục đích | Merge vào |
| :--- | :--- | :--- |
| "main" | Production code | - |
| "develop" | Integration branch | "main" (qua release) |
| "feat/*" | Feature mới | "develop" |
| "fix/*" | Bug fixes | "develop" |
| "hotfix/*" | Emergency fixes | "main" + "develop" |
| "release/*" | Release preparation | "main" + "develop" |

---

## Commit Convention

Chúng tôi dùng [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

* "feat": Tính năng mới
* "fix": Sửa bug
* "docs": Chỉ sửa docs
* "style": Format code (không thay đổi logic)
* "refactor": Refactor code
* "perf": Cải thiện performance
* "test": Thêm/sửa tests
* "chore": Build, tooling, deps
* "ci": CI/CD changes

### Scopes

* "web", "admin", "api", "ai", "crawler", "db", "ui", "docs", "deps"

### Ví dụ

```
feat(ai): add RAG pipeline for mentor chatbot
fix(web): resolve roadmap timeline render bug on Safari
docs(api): update OpenAPI spec for v2 endpoints
refactor(db): split user schema into multiple files
chore(deps): bump next to 14.2.0
```

---

## Coding Standards

### TypeScript

* **Strict mode** bật mặc định
* Ưu tiên "type" cho simple, "interface" cho extensible
* Không dùng "any" (dùng "unknown" nếu cần)
* Export types qua "packages/types"

### Naming

* "PascalCase": Components, Classes, Types, Interfaces
* "camelCase": Variables, functions
* "SCREAMING_SNAKE_CASE": Constants
* "kebab-case": File names (trừ React components)

### Component Structure (React)

```
// 1. Imports (external -> internal)
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// 2. Types
interface Props {
  title: string;
}

// 3. Component
export function MyComponent({ title }: Props) {
  // 3.1. Hooks
  const [open, setOpen] = useState(false);

  // 3.2. Derived state / handlers
  const handleClick = () => setOpen(true);

  // 3.3. Render
  return <Button onClick={handleClick}>{title}</Button>;
}
```

---

## Pull Request Process

1. ✅ Code pass lint + tests local
2. ✅ Update documentation nếu cần
3. ✅ Thêm/update tests
4. ✅ PR title theo Conventional Commits
5. ✅ Fill PR template đầy đủ
6. ✅ Link issue liên quan ("closes #123")
7. ✅ Request review từ CODEOWNER
8. ✅ Đợi CI pass + 1 approval
9. ✅ Squash merge

---

## Questions?

Mở **Discussion** hoặc liên hệ team trên Slack.

### 3. Tạo feature branch

```bash
git checkout develop
git pull origin develop
git checkout -b feat/roadmap-ai-generator
```
