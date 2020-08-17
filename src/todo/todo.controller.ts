import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { get } from 'http';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodo() {
    // getTodo() : Array<Number> {
    return this.todoService.getTodo();
  }

  @Post()
  postTodo(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    // console.log(`title: ${title}, subtitle: ${subtitle}`);
    this.todoService.addTodo(title, subtitle);
    return `title is ${title}, subtitle is ${subtitle}`;
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    console.log(`id: ${id}`);
    return this.todoService.removeTodoById(id);
  }
}
