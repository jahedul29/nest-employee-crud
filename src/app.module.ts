import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nestJsPractice:H2d7IL3lBMW58v9q@cluster0.n6je5.mongodb.net/?retryWrites=true&w=majority',
    ),
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
