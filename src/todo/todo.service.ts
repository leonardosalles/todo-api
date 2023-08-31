import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const createdTodo = await this.todoRepository.save(createTodoDto)
    return createdTodo
  }

  findAll() {
    return this.todoRepository.find()
  }

  findOne(id: number) {
    return this.todoRepository.findOneBy({ id })
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const updatedTodo = await this.todoRepository.update(id, updateTodoDto)
    return updatedTodo
  }

  remove(id: number) {
    return this.todoRepository.delete(id)
  }
}
