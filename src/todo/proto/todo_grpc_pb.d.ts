// package: todo.v1
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as todo_pb from "./todo_pb";

interface ITodoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTodo: ITodoService_ICreateTodo;
    getTodo: ITodoService_IGetTodo;
    listTodo: ITodoService_IListTodo;
    updateTodo: ITodoService_IUpdateTodo;
    deleteTodo: ITodoService_IDeleteTodo;
}

interface ITodoService_ICreateTodo extends grpc.MethodDefinition<todo_pb.CreateTodoRequest, todo_pb.TodoObject> {
    path: string; // "/todo.v1.Todo/CreateTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.CreateTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.CreateTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.TodoObject>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoObject>;
}
interface ITodoService_IGetTodo extends grpc.MethodDefinition<todo_pb.IdRequest, todo_pb.TodoObject> {
    path: string; // "/todo.v1.Todo/GetTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.IdRequest>;
    responseSerialize: grpc.serialize<todo_pb.TodoObject>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoObject>;
}
interface ITodoService_IListTodo extends grpc.MethodDefinition<todo_pb.Void, todo_pb.ListTodoResponse> {
    path: string; // "/todo.v1.Todo/ListTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.Void>;
    requestDeserialize: grpc.deserialize<todo_pb.Void>;
    responseSerialize: grpc.serialize<todo_pb.ListTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.ListTodoResponse>;
}
interface ITodoService_IUpdateTodo extends grpc.MethodDefinition<todo_pb.TodoUpdateRequest, todo_pb.Void> {
    path: string; // "/todo.v1.Todo/UpdateTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.TodoUpdateRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.TodoUpdateRequest>;
    responseSerialize: grpc.serialize<todo_pb.Void>;
    responseDeserialize: grpc.deserialize<todo_pb.Void>;
}
interface ITodoService_IDeleteTodo extends grpc.MethodDefinition<todo_pb.IdRequest, todo_pb.Void> {
    path: string; // "/todo.v1.Todo/DeleteTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.IdRequest>;
    responseSerialize: grpc.serialize<todo_pb.Void>;
    responseDeserialize: grpc.deserialize<todo_pb.Void>;
}

export const TodoService: ITodoService;

export interface ITodoServer {
    createTodo: grpc.handleUnaryCall<todo_pb.CreateTodoRequest, todo_pb.TodoObject>;
    getTodo: grpc.handleUnaryCall<todo_pb.IdRequest, todo_pb.TodoObject>;
    listTodo: grpc.handleUnaryCall<todo_pb.Void, todo_pb.ListTodoResponse>;
    updateTodo: grpc.handleUnaryCall<todo_pb.TodoUpdateRequest, todo_pb.Void>;
    deleteTodo: grpc.handleUnaryCall<todo_pb.IdRequest, todo_pb.Void>;
}

export interface ITodoClient {
    createTodo(request: todo_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    getTodo(request: todo_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    getTodo(request: todo_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    getTodo(request: todo_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    listTodo(request: todo_pb.Void, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoResponse) => void): grpc.ClientUnaryCall;
    listTodo(request: todo_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoResponse) => void): grpc.ClientUnaryCall;
    listTodo(request: todo_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoResponse) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.TodoUpdateRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.TodoUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.TodoUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
}

export class TodoClient extends grpc.Client implements ITodoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTodo(request: todo_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    public getTodo(request: todo_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    public getTodo(request: todo_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    public getTodo(request: todo_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoObject) => void): grpc.ClientUnaryCall;
    public listTodo(request: todo_pb.Void, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoResponse) => void): grpc.ClientUnaryCall;
    public listTodo(request: todo_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoResponse) => void): grpc.ClientUnaryCall;
    public listTodo(request: todo_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.TodoUpdateRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.TodoUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.TodoUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Void) => void): grpc.ClientUnaryCall;
}
