import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthResponse } from './dto/auth-repsonse.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    create(craeteUserData: CreateUserDto): Promise<AuthResponse>;
    login(loginDto: UserLoginDto): Promise<AuthResponse>;
}
