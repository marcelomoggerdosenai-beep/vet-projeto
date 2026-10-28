import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity ('Especies')

export class Especie {
    @PrimaryGeneratedColumn()
    id!: number

    @Column ({type: 'string'})
    nomePopular!: string

    @Column ({type: 'string'})
    nomeCientifico!: string

    @Column ({length: 150})
    descricao!: string

    @Column ({default: true})
    domestico!: boolean

    @Column ({default: true})
    ativo: boolean
}