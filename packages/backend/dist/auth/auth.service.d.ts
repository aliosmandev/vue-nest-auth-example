import { UsersService } from 'src/users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<{
        user: User;
        accessToken: string;
    }>;
    login(loginDto: UserLoginDto): Promise<{
        user: User;
        accessToken: string;
    }>;
    private createAccessToken;
}
