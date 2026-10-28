import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from './tutores/tutor.entity.js';
import { Pet } from './pets/pet.entity.js';
import { Raca } from './racas/raca.entity.js';
import { Especie } from './especies/especie.entity.js';
import { Origem } from './origemEspecies/origem.entity.js';


@Module({
    imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'vet_db',
      entities: [Tutor, Pet, Raca, Especie, Origem],
      synchronize: true,
      logging: true,
  }),
],
})
export class AppModule {}
