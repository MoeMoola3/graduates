import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [UsersService]
  providers: [UsersResolver]
})
export class UsersModule {}
