import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string): Promise<any>{
    console.log('email', email)
    const user = await this.usersService.findOneByEmail(email);
    user ? user : null
  }
}
