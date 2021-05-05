// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');

function serialize_todo_v1_CreateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type todo.v1.CreateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_CreateTodoRequest(buffer_arg) {
  return todo_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_IdRequest(arg) {
  if (!(arg instanceof todo_pb.IdRequest)) {
    throw new Error('Expected argument of type todo.v1.IdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_IdRequest(buffer_arg) {
  return todo_pb.IdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_ListTodoResponse(arg) {
  if (!(arg instanceof todo_pb.ListTodoResponse)) {
    throw new Error('Expected argument of type todo.v1.ListTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_ListTodoResponse(buffer_arg) {
  return todo_pb.ListTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_TodoObject(arg) {
  if (!(arg instanceof todo_pb.TodoObject)) {
    throw new Error('Expected argument of type todo.v1.TodoObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_TodoObject(buffer_arg) {
  return todo_pb.TodoObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_TodoUpdateRequest(arg) {
  if (!(arg instanceof todo_pb.TodoUpdateRequest)) {
    throw new Error('Expected argument of type todo.v1.TodoUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_TodoUpdateRequest(buffer_arg) {
  return todo_pb.TodoUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_Void(arg) {
  if (!(arg instanceof todo_pb.Void)) {
    throw new Error('Expected argument of type todo.v1.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_Void(buffer_arg) {
  return todo_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoService = exports.TodoService = {
  createTodo: {
    path: '/todo.v1.Todo/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CreateTodoRequest,
    responseType: todo_pb.TodoObject,
    requestSerialize: serialize_todo_v1_CreateTodoRequest,
    requestDeserialize: deserialize_todo_v1_CreateTodoRequest,
    responseSerialize: serialize_todo_v1_TodoObject,
    responseDeserialize: deserialize_todo_v1_TodoObject,
  },
  getTodo: {
    path: '/todo.v1.Todo/GetTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.IdRequest,
    responseType: todo_pb.TodoObject,
    requestSerialize: serialize_todo_v1_IdRequest,
    requestDeserialize: deserialize_todo_v1_IdRequest,
    responseSerialize: serialize_todo_v1_TodoObject,
    responseDeserialize: deserialize_todo_v1_TodoObject,
  },
  listTodo: {
    path: '/todo.v1.Todo/ListTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.Void,
    responseType: todo_pb.ListTodoResponse,
    requestSerialize: serialize_todo_v1_Void,
    requestDeserialize: deserialize_todo_v1_Void,
    responseSerialize: serialize_todo_v1_ListTodoResponse,
    responseDeserialize: deserialize_todo_v1_ListTodoResponse,
  },
  updateTodo: {
    path: '/todo.v1.Todo/UpdateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.TodoUpdateRequest,
    responseType: todo_pb.Void,
    requestSerialize: serialize_todo_v1_TodoUpdateRequest,
    requestDeserialize: deserialize_todo_v1_TodoUpdateRequest,
    responseSerialize: serialize_todo_v1_Void,
    responseDeserialize: deserialize_todo_v1_Void,
  },
  deleteTodo: {
    path: '/todo.v1.Todo/DeleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.IdRequest,
    responseType: todo_pb.Void,
    requestSerialize: serialize_todo_v1_IdRequest,
    requestDeserialize: deserialize_todo_v1_IdRequest,
    responseSerialize: serialize_todo_v1_Void,
    responseDeserialize: deserialize_todo_v1_Void,
  },
};

exports.TodoClient = grpc.makeGenericClientConstructor(TodoService);
