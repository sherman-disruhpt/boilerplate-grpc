import {v4 as uuidv4} from 'uuid';
import TodoEntity from './todo.entity';
import {State} from "./proto/todo_pb";

export class TodoService {
    todos: Array<TodoEntity>
    
    constructor() {
        this.todos = [];
    }

     async all(): Promise<Array<TodoEntity>> {
        return this.todos;
    }

     async getBy(id: string): Promise<TodoEntity> {
        return this.todos.find(m => m.id == id);
    }

     async create(text: string, state: State): Promise<TodoEntity> {
        const todo: TodoEntity = {
            id: uuidv4(),
            text,
            state
        };

        this.todos.push(todo);

        return todo;
    }

    async remove(id: string): Promise<void> {
        this.todos = this.todos.filter(m => m.id != id);
    }

     async mark(id: string, state: State): Promise<void>{
        const index = this.todos.findIndex((obj => obj.id == id));
        this.todos[index].state = state;
    }
}
