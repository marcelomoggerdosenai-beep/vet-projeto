import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity('tutores')

export class Tutor{
    @PrimaryGeneratedColumn()

    id!: number;

    @Column ({length: 100, nullable: false})
    nome!: string

    @Column ({type: 'int', unique: true})
    cpf!: number

    @Column ({length: 150})
    email!: string

    @Column ({length: 20})
    telefone!: number

    @Column ({type: 'string'})
    endereco!: string

    @Column ({default: true})
    ativo: boolean
}