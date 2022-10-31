import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    email: string;
    password: string;
}
export declare class CreateUserDtoResult {
    id?: string;
    email: string;
}
