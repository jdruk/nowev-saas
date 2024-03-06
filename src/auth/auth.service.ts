import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  jwtService: any;
  constructor(private usersService: UsersService) {}

  async signIn(signInDto: SignInDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(signInDto.email);
    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}