import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/users/interfaces/user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() craeteUserData: CreateUserDto): Promise<User> {
    return this.usersService.create(craeteUserData);
  }

  @Post('login')
  login(@Body() loginData: CreateUserDto) {
    return this.authService.login(loginData);
  }
}
