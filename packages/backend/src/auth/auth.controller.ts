import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthResponse } from './dto/auth-repsonse.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() craeteUserData: CreateUserDto): Promise<AuthResponse> {
    return this.authService.register(craeteUserData);
  }

  @Post('login')
  login(@Body() loginDto: UserLoginDto): Promise<AuthResponse> {
    return this.authService.login(loginDto);
  }
}
