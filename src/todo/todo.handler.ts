import { TodoService as GrpcService } from './proto/todo_grpc_pb';
import { TodoService } from './todo.service';
import { sendUnaryData, ServerUnaryCall } from 'grpc';
import TodoEntity from './Todo.entity';
import { ITodoServer } from './proto/Todo_grpc_pb';
import {
    CreateTodoRequest,
    TodoObject, TodoUpdateRequest,
    IdRequest,
    ListTodoResponse,
    Void
} from './proto/todo_pb';


export const TodoServiceDefinition = GrpcService;

const EntityToResponse = (todo: TodoEntity): TodoObject => {
    const obj = new TodoObject();
    obj.setState(todo.state);
    obj.setId(todo.id);
    obj.setText(todo.text);
    return obj;
};

/**
 * ### Generic Handler Description
 * - The handler acts as the interface between the gRPC server and the actual service.
 * - It should be as lightweight as possible, mostly transforming parameters and providing type safety.
 * - The handler should also catch any internal errors and handle them or translate them for the gRPC standard.
 */
export class TodoHandler implements ITodoServer {
    private service: TodoService;

    constructor(service: TodoService) { this.service = service; }

    async createTodo(call: ServerUnaryCall<CreateTodoRequest>, callback: sendUnaryData<TodoObject>): Promise<void> {
        try {
            const todo = await this.service.create(call.request.getText(), call.request.getState());
            callback(null, EntityToResponse(todo));
        } catch (e) {
            console.log(e);
        }
    }

    async deleteTodo(call: ServerUnaryCall<IdRequest>, callback: sendUnaryData<Void>): Promise<void> {
        try {
            await this.service.remove(call.request.getId());
            callback(null, new Void());
        } catch (e) {
            console.log(e);
        }
    }

    async getTodo(call: ServerUnaryCall<IdRequest>, callback: sendUnaryData<TodoObject>): Promise<void> {
        try {
            const todo = await this.service.getBy(call.request.getId());
            callback(null, EntityToResponse(todo));
        } catch (e) {
            console.log(e);
        }
    }

    async listTodo(call: ServerUnaryCall<Void>, callback: sendUnaryData<ListTodoResponse>): Promise<void> {
        try {
            const entityList = await this.service.all();

            const listDto = new ListTodoResponse();
            listDto.setTodosList(entityList.map((e: TodoEntity) => {
                return EntityToResponse(e);
            }));
            listDto.setTotal(entityList.length.toString())
            callback(null, listDto);
        } catch (e) {
            console.log(e);
        }
    }

    async updateTodo(call: ServerUnaryCall<TodoUpdateRequest>, callback: sendUnaryData<Void>): Promise<void> {
        try {
            await this.service.mark(call.request.getId(), call.request.getState());
            const response = new Void();
            callback(null, response);
        } catch (e) {
            console.log(e);
        }
    }

}
