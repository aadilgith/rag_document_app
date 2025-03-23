import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() { username, password }: { username: string; password: string },
  ) {
    return this.authService.generateJwt(
      await this.authService.validateUser(username, password),
    );
  }
}
