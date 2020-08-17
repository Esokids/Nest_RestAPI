import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
// import * as uuid from 'uuid/1';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

  addTodo(title: string, subtitle: string) {
    console.log(`title: ${title}, subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = uuid();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArray.push(todo);
  }

  getTodo() {
    console.log(this.todoArray);
    return this.todoArray;
  }

  removeTodoById(id: string) {
    const found = this.todoArray.find(item => item.id === id);
    if (!found) throw new NotFoundException();
    this.todoArray = this.todoArray.filter(item => item.id !== id);
    return this.todoArray;
  }
}
