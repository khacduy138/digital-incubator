import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Test Phân Quyền')
@ApiBearerAuth() // Báo cho Swagger biết API này cần Token
@Controller('dashboard')
// 1. Gắn Guard bắt buộc phải Đăng nhập (có Token)
// 2. Gắn Guard kiểm tra quyền (Roles)
@UseGuards(AuthGuard('jwt'), RolesGuard) 
export class TestRolesController {

  // API 1: Bất kỳ ai đăng nhập cũng vào được (Không cần @Roles)
  @Get('public-info')
  getPublicInfo(@Request() req: any) {
    return { message: `Chào bạn, bạn đang đăng nhập với role: ${req.user.role}` };
  }

  // API 2: Chỉ Sinh viên (Startup) mới được vào
  @Get('startup-only')
  @Roles(UserRole.STUDENT)
  getStartupData() {
    return { message: 'Đây là dữ liệu bí mật chỉ dành cho STARTUP' };
  }

  // API 3: Chỉ Mentor mới được vào
  @Get('mentor-only')
  @Roles(UserRole.MENTOR)
  getMentorData() {
    return { message: 'Đây là danh sách hồ sơ cần review, chỉ dành cho MENTOR' };
  }

  // API 4: Dành cho cả Admin và Mentor
  @Get('management')
  @Roles(UserRole.ADMIN, UserRole.MENTOR)
  getManagementData() {
    return { message: 'Giao diện quản lý dành cho Admin hoặc Mentor' };
  }
}
