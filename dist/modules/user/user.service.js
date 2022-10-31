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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const PrismaService_1 = require("../../database/PrismaService");
let UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createUserDto) {
        const userExists = await this.prismaService.user.findFirst({
            where: {
                email: createUserDto.email,
            },
        });
        if (userExists)
            throw new Error('This user already exists');
        const data = Object.assign(Object.assign({}, createUserDto), { password: await bcrypt.hash(createUserDto.password, 10) });
        const userResult = await this.prismaService.user.create({
            data,
        });
        return Object.assign(Object.assign({}, userResult), { password: undefined });
    }
    async findOne(id) {
        const userExists = await this.prismaService.user.findFirst({
            where: {
                id,
            },
        });
        if (!userExists)
            throw new Error('This user not exists');
        return userExists;
    }
    async update(id, updateUserDto) {
        const userExists = await this.prismaService.user.findFirst({
            where: {
                id,
            },
        });
        if (!userExists)
            throw new Error('This user not already exists');
        return await this.prismaService.user.update({
            where: {
                id,
            },
            data: updateUserDto,
        });
    }
    async remove(id) {
        const userExists = await this.prismaService.user.findFirst({
            where: {
                id,
            },
        });
        if (!userExists)
            throw new Error('This user not exists');
        return await this.prismaService.user.delete({
            where: {
                id,
            },
        });
    }
    async findByEmail(email) {
        return await this.prismaService.user.findFirst({
            where: {
                email,
            },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map