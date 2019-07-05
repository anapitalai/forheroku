export class CreatePropertyDTO {
    readonly id?: string;
    readonly name: string;
    readonly proptype: string;
    readonly price: number;
    readonly images?: string;
    readonly created:Date;
}