import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/patch-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        password: any;
        id?: string;
        email: string;
    }>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").User>;
}
