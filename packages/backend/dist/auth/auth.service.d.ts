import { UsersService } from 'src/users/users.service';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/interfaces/user.interface';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(loginDto: UserLoginDto): Promise<{
        user: import("mongoose").Document<unknown, any, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: string;
    }>;
    private createAccessToken;
}
