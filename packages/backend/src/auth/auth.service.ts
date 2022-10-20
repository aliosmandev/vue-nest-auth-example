import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async login(loginDto: UserLoginDto) {
    const dbUser = await this.usersService.findUserByEmail(loginDto.email);
    const passwordsMatch = await this.usersService.validateCredentials(dbUser, loginDto.password);

    return {
      user: dbUser,
      token: this.createAccessToken(dbUser),
    };
  }

  private createAccessToken(user: User) {
    const payload = {
      userId: user._id,
    };
    return this.jwtService.sign(payload);
  }
}
