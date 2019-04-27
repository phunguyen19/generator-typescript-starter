import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [DatabaseModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
