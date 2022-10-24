import { CreateUserDto } from '../auth/dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<User>;
    private isEmailUnique;
    findUserByEmail(email: string): Promise<User>;
    validateCredentials(user: any, password: string): Promise<boolean>;
    validateUser(userId: string): Promise<any>;
}
