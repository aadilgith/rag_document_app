import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Replace with actual DB lookup
    const user = { username, password: bcrypt.hashSync('password', 10), role: 'admin' };
    
    if (!bcrypt.compareSync(pass, user.password)) throw new UnauthorizedException();
    return { username: user.username, role: user.role };
  }

  async generateJwt(user: any) {
    return { access_token: this.jwtService.sign(user) };
  }
}
