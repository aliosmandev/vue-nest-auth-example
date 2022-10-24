"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const user = await this.isEmailUnique(createUserDto.email);
        if (user)
            throw new common_1.NotFoundException('Email most be unique');
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        const createdUser = await this.prisma.user.create({ data: createUserDto });
        return createdUser;
    }
    async isEmailUnique(email) {
        return await this.prisma.user.findFirst({ where: { email } });
    }
    async findUserByEmail(email) {
        const user = await this.prisma.user.findFirst({ where: { email } });
        if (!user) {
            throw new common_1.BadRequestException('Email not found');
        }
        return user;
    }
    async validateCredentials(user, password) {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new common_1.BadRequestException('Wrong email or password');
        }
        return match;
    }
    async validateUser(userId) {
        const user = await this.prisma.user.findFirst({ where: { id: userId } });
        if (!user) {
            throw new common_1.UnauthorizedException('user not found');
        }
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map