import { BadRequestException, Get, Injectable, NotFoundException, UnauthorizedException, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.isEmailUnique(createUserDto.email);
    if (user) throw new NotFoundException('Email most be unique');

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const createdUser = await this.prisma.user.create({ data: createUserDto });
    return createdUser;
  }

  private async isEmailUnique(email: string) {
    return await this.prisma.user.findFirst({ where: { email } });
  }

  async findUserByEmail(email: string) {
    const user = await this.prisma.user.findFirst({ where: { email } });
    if (!user) {
      throw new BadRequestException('Email not found');
    }
    return user;
  }

  async validateCredentials(user: any, password: string): Promise<boolean> {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new BadRequestException('Wrong email or password');
    }
    return match;
  }

  public async validateUser(userId: string): Promise<any> {
    const user = await this.prisma.user.findFirst({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    return user;
  }
}
