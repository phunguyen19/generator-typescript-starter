import { Injectable } from '@nestjs/common';
import { Todo } from './todos.entity';

@Injectable()
export class TodoService {
  public findAll(): PromiseLike<Todo[]> {
    return Todo.findAll();
  }
}
