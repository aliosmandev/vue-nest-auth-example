import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return {
      user,
      accessToken: this.createAccessToken(user),
    };
  }

  async login(loginDto: UserLoginDto) {
    const dbUser = await this.usersService.findUserByEmail(loginDto.email);
    const passwordsMatch = await this.usersService.validateCredentials(dbUser, loginDto.password);

    return {
      user: dbUser,
      accessToken: this.createAccessToken(dbUser),
    };
  }

  private createAccessToken(user: User) {
    const payload = {
      userId: user.id,
    };
    return this.jwtService.sign(payload);
  }
}
