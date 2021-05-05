import { ChannelCredentials, credentials as cred, ServiceError } from 'grpc';
import { TodoClient as Client } from './proto/todo_grpc_pb';
import {
  CreateTodoRequest,
  TodoObject, TodoUpdateRequest,
  IdRequest,
  ListTodoResponse, Void, State
} from './proto/todo_pb';

import TodoEntity from './todo.entity';

export default class TodoClient {
  private client: Client;

  constructor (serverAddress: string, credentials?: ChannelCredentials) {
    this.client = new Client(serverAddress, credentials ? credentials : cred.createInsecure());
  }

  /**
   * create
   * @remarks
   * Creates a new todo item
   *
   * @returns a newly created {@link TodoEntity}
   * @param todo
   */
  async create (todo: TodoEntity): Promise<TodoObject.AsObject> {
    return new Promise((resolve, reject) => {
      const request = new CreateTodoRequest();
      request.setText(todo.text);
      request.setState(todo.state);

      this.client.createTodo(request, (err: ServiceError, response: TodoObject) => {
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      });
    });
  };

  /**
   * get
   * @remarks
   * Retrieves a specific todo.
   *
   * @param id
   * @returns a {@link TodoEntity}
   */
  async get (id: string): Promise<TodoObject.AsObject> {
    return new Promise((resolve, reject) => {
      const request = new IdRequest();
      request.setId(id);

      this.client.getTodo(request, (err: ServiceError, response: TodoObject) => {
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      });
    });
  }

  /**
   * list
   * @remarks
   * Retrieve all todo items.
   *
   * @returns a {@link Array<TodoEntity>}
   */
  async list (): Promise<ListTodoResponse.AsObject> {
    return new Promise((resolve, reject) => {
      const request = new Void();
      
      this.client.listTodo(request, (err: ServiceError, response: ListTodoResponse) => {
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      });
    });
  };

  /**
   * delete
   * @remarks
   * Deletes an existing {@link TodoEntity}
   *
   * @param id
   */
  async delete (id: string): Promise<Void.AsObject> {
    return new Promise((resolve, reject) => {
      const request = new IdRequest();
      request.setId(id);

      this.client.deleteTodo(request, (err: ServiceError, response: Void) => {
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      });
    });
  };

  /**
   * update
   * @remarks
   * Updates an existing {@link TodoEntity}
   *
   * @param id
   * @param state
   */
  async update (id: string, state: State): Promise<Void.AsObject> {
    return new Promise((resolve, reject) => {
      const request = new TodoUpdateRequest();
      request.setId(id);
      request.setState(state);

      this.client.updateTodo(request, (err: ServiceError, response: Void) => {
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      });
    });
  };
}
