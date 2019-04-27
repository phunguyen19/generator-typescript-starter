import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodoService } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodoService],
})
export class TodosModule {}
