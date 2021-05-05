import dotenv from 'dotenv';
import { TodoClient, TodoEntity, State } from './dist-sdk';
dotenv.config({ path: require('path').join(__dirname, './.env') });

const client = new TodoClient(process.env.GRPC_ADDRESS);

const runStory = async () => {

const newTodos : Array<TodoEntity> = [];

newTodos.push(await client.create({
    text: "Learn gRPC",
    state: State.UNCHECKED
}));

newTodos.push(await client.create({
    text: "POC of gRPC",
    state: State.UNCHECKED
}));

newTodos.push(await client.create({
    text: "Integrate gRPC in services",
    state: State.UNCHECKED
}));

newTodos.forEach(m => console.log("Created:", m, "\n"));

newTodos[0].state = State.CHECKED
await client.update(newTodos[0].id, newTodos[0].state);
console.log("Updated:", newTodos[0], "\n");

newTodos[1].state = State.STRIKE
await client.update(newTodos[1].id, newTodos[1].state);
console.log("Updated:", newTodos[1].id, "\n");

const todo = await client.get(newTodos[1].id);
console.log("Retrieved:", todo, "\n");

await client.delete(newTodos[1].id);
console.log("Deleted:", newTodos[1].id, "\n");

const todos = await client.list();
console.log("List:", todos);

}

runStory();


