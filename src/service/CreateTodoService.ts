import { getRepository } from 'typeorm';
import Todo from '../models/Todo';
// import TodosRepository from '../repositories/TodosRepository';

interface Request {
  title: string;
  description: string;
  completed: boolean;
}

class CreateTodoService {
  public async execute({
    title,
    description,
    completed,
  }: Request): Promise<Todo> {
    const todosRepository = getRepository(Todo);

    const todo = todosRepository.create({
      title,
      description,
      completed,
    });

    await todosRepository.save(todo);
    return todo;
  }
}

export default CreateTodoService;
