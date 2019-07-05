export class CreateUserDTO {
    readonly id?: string;
    readonly username: string;
    readonly password: string;
    readonly images?: string;
    readonly created:Date;
}