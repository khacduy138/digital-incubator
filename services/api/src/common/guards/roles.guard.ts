import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Lấy danh sách Roles được phép truy cập từ Decorator của API
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    
    // Nếu API không yêu cầu role cụ thể -> Ai cũng vào được
    if (!requiredRoles) {
      return true; 
    }

    // 2. Lấy thông tin user hiện tại từ token (đã giải mã)
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // 3. Kiểm tra quyền
    const hasRole = requiredRoles.includes(user.role);
    if (!hasRole) {
      throw new ForbiddenException('Bạn không có quyền (Role) để thực hiện hành động này!');
    }
    
    return true;
  }
}
