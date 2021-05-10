# Boilerplate gRPC Service and SDK
This repo is to demonstrate how to quickly setup a gRPC server and create a client for direct communication. 

## Generate from proto
This needs to be done in order for any of the below commands to work. It generates code based off the proto file(s).
```
./protoc.sh
```

## Start Server
This will build/publish the server locally. It will then run and listen for commands. For development make sure you have set the connection information in the `.env` file.
```
npm run start
```

### Build Server
```
 npm run build-server
```

## Start Story
This will build/publish the sdk locally and then run a sample of all the functions from the sdk. (Note: the server must be running. See "Start Server" above)
```
npm run story
```

### Build SDK
```
npm run build-sdk
```

### Run Story without build
ts-node should be installed on your environment for this to work
```
ts-node todo-story.ts
```

