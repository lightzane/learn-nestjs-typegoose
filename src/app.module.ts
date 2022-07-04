import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './config/config.env',
      isGlobal: true,
    }),
    TypegooseModule.forRootAsync({
      // imports: [ConfigService], // Should be removed in Nest v8+
      useFactory: async (configService: ConfigService) => ({
        uri: encodeURI(configService.get('MONGO_CONNECTION')),
      }),
      inject: [ConfigService]
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
