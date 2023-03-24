import { IsString } from "class-validator";
import { IsNotEmpty, IsNumber, MinLength } from "class-validator/types/decorator/decorators";

export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string

    @IsNumber()
    price: number

    @IsString()
    @MinLength(15)
    description: string

    @IsString()
    slug: string

    @IsNumber()
    stock?: number

    @IsString()
    gender: string


}