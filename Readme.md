![img](https://miro.medium.com/max/1756/1*fzcYZIhdZjuQaT8gTk1YAQ.png)

###Whats inside:
* eslint 
* concurrently
* nodemon 
* ts-node
* typescript
* express + types
* dotenv + types
* tsconfig
* body-parser + types
* errorhandler + types
* mongoose + types
* mongodb

###Scripts
```shell
    npm run build-ts //compile ts files
    npm run watch-ts //compile ts files in watch mode
    npm run watch-node //runs server.js
    npm run watch // used for development
    npm run lint // runs the linter
    npm run serve // starts the server
    npm start // same as the above
    
```

###Structure
```
project
│   README.md
│   .eslintrc
│   .package.json
│   tsconfig.json
|   .env
│
└───src
│   │   app.ts
│   │   server.ts
│   │
│   └───controller
│    │  │   ApiController.ts
│    │  │   index.ts(barrel)
│    │  │   UserController.ts
     └───data
     │      │   AbstractRepository
     │      │   index.ts(barrel)
     └───model
     │     │   AbstractRepository
     │     │   index.ts(barrel)
     └───routes
     │     │   ApiRouter.ts
     │     │   UserRouter.ts
```
