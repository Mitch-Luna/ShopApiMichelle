import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column({type: 'text', unique:true})
    title: string;

    @Column({ type: 'numeric' })
    price?: number

    @Column({type: 'text'})
    description?: string

    @Column({type: 'text'})
    slug?: string

    @Column({type: 'numeric', nullable: true, default: 0})
    stock?: number

    @Column({type: 'text'})
    gender?: string
}