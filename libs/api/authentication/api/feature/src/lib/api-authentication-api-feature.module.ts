import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
<<<<<<< HEAD
import { UsersResolver } from './users/users.resolver';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
=======
// import { UsersResolver } from './users/users.resolver';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
>>>>>>> 1ef2e38d347f41a3b00163fa6c12f8bf222a9b6e
})
export class ApiAuthenticationApiFeatureModule {}
