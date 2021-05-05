import dotenv from 'dotenv';
import { Server, ServerCredentials } from 'grpc';
import { TodoHandler, TodoServiceDefinition } from './todo/todo.handler';
import { TodoService } from './todo/todo.service';

dotenv.config({ path: require('path').join(__dirname, '../.env') });

const server = new Server();

server.addService(
  TodoServiceDefinition,
  new TodoHandler(new TodoService())
);

server.bind(process.env.GRPC_ADDRESS, ServerCredentials.createInsecure());
console.info(`server started with address ${process.env.GRPC_ADDRESS}`);
server.start();
