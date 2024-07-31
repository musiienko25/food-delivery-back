import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from "@nestjs/graphql"
import {ApolloGatewayDriverConfig} from "@nestjs/apollo"

@Module({
  imports: [GraphQLModule.forRoot<ApolloGatewayDriverConfig>],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
