import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { UserEntity } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from '../event/entities/event.entity';
import {CloudinaryService} from "../cloudinary/cloudinary.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EventEntity])],
  controllers: [UsersController],
  providers: [UsersService, CloudinaryService],
  exports: [UsersService],
})
export class UsersModule {}
