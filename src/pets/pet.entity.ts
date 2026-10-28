import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity ('Pets')

export class Pet {
    @PrimaryGeneratedColumn()
    id!: number

    @Column ({nullable: false, type: 'string'})
    nome!: string

    @Column ({type: Date})
    dataNascimento!: Date

    @Column ({type: 'string'})
    sexo!: string

    @Column ({type: 'decimal'})
    peso!: number

    @Column ({type: 'string'})
    cor!: string

    @Column ({default: false})
    castrado!: boolean

    @Column ({default: true})
    ativo!: boolean
}