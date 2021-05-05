import {State} from "./proto/todo_pb";

export default interface TodoEntity {
    id?: string;
    text: string;
    state: State;
  }