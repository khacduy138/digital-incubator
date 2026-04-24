# ADR-0001: Sử dụng Monorepo với pnpm + Turborepo

- **Date:** 2026-04-24
- **Status:** Accepted
- **Deciders:** Tech Lead

## Context

Dự án có nhiều ứng dụng (web, admin) và services (api, ai, crawler) chia sẻ types, UI components, utilities. Cần quyết định cấu trúc repository.

## Decision

Sử dụng **Monorepo** với:
- **pnpm workspaces**: Package manager
- **Turborepo**: Build orchestration + cache

## Rationale

### Ưu điểm Monorepo
1. **Type sharing**: `@incubator/types` dùng chung FE-BE, không sync API contracts thủ công
2. **Atomic commits**: 1 PR thay đổi schema + API + UI → không bị inconsistent
3. **Refactoring dễ**: Rename symbol cross-package với TypeScript
4. **Onboard dev dễ**: 1 `git clone`, 1 `pnpm install`
5. **Turborepo cache**: Build lại chỉ phần thay đổi

### Nhược điểm chấp nhận được
1. Repo size lớn hơn → Dùng git partial clone nếu cần
2. CI thời gian dài hơn → Turborepo remote cache giải quyết

## Alternatives Considered

1. **Polyrepo**: Mỗi service 1 repo
   - Loại: Quá sớm, team nhỏ, overhead sync cao
2. **Nx**: Tương tự Turborepo nhưng opinionated hơn
   - Loại: Turborepo đủ dùng, ít learning curve

## Consequences

- Dev phải học pnpm workspaces (1-2 giờ)
- CI cần cache node_modules/turbo cache
- Khi scale >50 devs, reconsider sang polyrepo
