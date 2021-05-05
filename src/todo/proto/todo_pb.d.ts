// package: todo.v1
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateTodoRequest extends jspb.Message { 
    getState(): State;
    setState(value: State): void;

    getText(): string;
    setText(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
    static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
    export type AsObject = {
        state: State,
        text: string,
    }
}

export class IdRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdRequest;
    static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
    export type AsObject = {
        id: string,
    }
}

export class TodoObject extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getText(): string;
    setText(value: string): void;

    getState(): State;
    setState(value: State): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoObject.AsObject;
    static toObject(includeInstance: boolean, msg: TodoObject): TodoObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TodoObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoObject;
    static deserializeBinaryFromReader(message: TodoObject, reader: jspb.BinaryReader): TodoObject;
}

export namespace TodoObject {
    export type AsObject = {
        id: string,
        text: string,
        state: State,
    }
}

export class TodoUpdateRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getState(): State;
    setState(value: State): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TodoUpdateRequest): TodoUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TodoUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoUpdateRequest;
    static deserializeBinaryFromReader(message: TodoUpdateRequest, reader: jspb.BinaryReader): TodoUpdateRequest;
}

export namespace TodoUpdateRequest {
    export type AsObject = {
        id: string,
        state: State,
    }
}

export class ListTodoResponse extends jspb.Message { 
    clearTodosList(): void;
    getTodosList(): Array<TodoObject>;
    setTodosList(value: Array<TodoObject>): void;
    addTodos(value?: TodoObject, index?: number): TodoObject;

    getTotal(): string;
    setTotal(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodoResponse): ListTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodoResponse;
    static deserializeBinaryFromReader(message: ListTodoResponse, reader: jspb.BinaryReader): ListTodoResponse;
}

export namespace ListTodoResponse {
    export type AsObject = {
        todosList: Array<TodoObject.AsObject>,
        total: string,
    }
}

export class Void extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Void.AsObject;
    static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Void;
    static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
    export type AsObject = {
    }
}

export enum State {
    UNCHECKED = 0,
    CHECKED = 1,
    STRIKE = 2,
}
