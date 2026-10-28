import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity ('Raças')

export class Raca {
    @PrimaryGeneratedColumn()
    id!: number

    @Column ({type: 'string'})
    nome!: string

    @Column ({type: 'string'})
    porte!: string

    @Column ({length: 100})
    descricao!: string

    @Column ({length: 2})
    expectativaDeVida!: number

    @Column ({default: true})
    ativo: boolean
}
