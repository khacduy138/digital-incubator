import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      // Lấy token từ header "Authorization: Bearer <token>"
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'super-secret-key-for-dev',
    });
  }

  // Hàm này tự động chạy khi giải mã token thành công
  // Trả về thông tin User để gán vào request.user
  async validate(payload: any) {
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role, // Đây là cái ta cần để phân quyền!
    };
  }
}
