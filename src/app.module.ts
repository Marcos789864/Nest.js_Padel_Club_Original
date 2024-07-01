import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'nestjs',
      password: 'root',
      database: 'PadelClub',
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
      synchronize: true,
    }),
  ],
})
export class AppModule {}
