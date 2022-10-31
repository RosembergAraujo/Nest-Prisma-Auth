import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { UserToken } from './models/UserToken';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    auth(user: User): UserToken;
    validateUser(email: string, password: string): Promise<{
        password: any;
        id: string;
        email: string;
    }>;
}
