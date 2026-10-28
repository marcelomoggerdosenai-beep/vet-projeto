import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity ('Origens')

export class Origem {
    @PrimaryGeneratedColumn()
    id!: number

    @Column ({type: 'string'})
    continente!: string

    @Column ({type: 'string'})
    pais!: string

    @Column ({type: 'string'})
    regiao!: string

    @Column ({length: 150})
    descricao!: string

    @Column ({default: true})
    ativo!: boolean
}
