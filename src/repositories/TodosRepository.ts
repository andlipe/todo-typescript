import { EntityRepository, Repository } from 'typeorm';
import Todo from '../models/Todo';

@EntityRepository(Todo)
class TodosRepository extends Repository<Todo> {
  public async findById(id: string): Promise<Todo | null> {
    const findTodo = await this.findOne({
      where: { id },
    });
    return findTodo || null;
  }
}

export default TodosRepository;
