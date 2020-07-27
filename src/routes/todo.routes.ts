import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import CreateTodoService from '../service/CreateTodoService';
import TodoRepository from '../repositories/TodosRepository';

const todoRouter = Router();

todoRouter.get('/', async (request, response) => {
  const todoRepository = getCustomRepository(TodoRepository);
  const todos = await todoRepository.find();

  return response.json(todos);
});

todoRouter.post('/', async (request, response) => {
  const { title, description, completed } = request.body;

  const createTodo = new CreateTodoService();

  const todo = await createTodo.execute({
    title,
    description,
    completed,
  });

  return response.json(todo);
});

export default todoRouter;
