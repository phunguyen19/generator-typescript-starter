// tslint:disable-next-line
import { Controller, Delete, Get, Inject, Patch, Post, Put } from '@nestjs/common';
import { TodoService } from './todos.service';

@Controller('todos')
export class TodosController {
  @Inject(TodoService)
  private todoService: TodoService;

  @Get()
  getAllTodos() {
    return [];
  }

  @Post()
  createTodo() {
    return {};
  }

  @Patch()
  updateTodo() {
    return {};
  }

  @Put()
  editTodo() {
    return {};
  }

  @Delete()
  deleteTodo() {
    return {};
  }
}
