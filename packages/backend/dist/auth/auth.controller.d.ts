import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/users/interfaces/user.interface';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    create(craeteUserData: CreateUserDto): Promise<User>;
    login(loginData: CreateUserDto): Promise<{
        user: import("mongoose").Document<unknown, any, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: string;
    }>;
}
