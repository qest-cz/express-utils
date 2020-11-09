# Express utils

The goal is to normalize our express based applications, use the same error handling, request logging, etc. Use the same security settings and outputs for all applications.

This package includes basic normalized express server with pre and post middlewares for each request (like cors, rate limiter, body parsing, etc). 
Package includes a simple error handler for each request which works well with the HTTP errors from [@qest/error-utils](https://www.npmjs.com/package/@qest/error-utils) package. 
It also logs each error or request with [@qest/logger-utils](https://www.npmjs.com/package/@qest/logger-utils) package or custom logger.

## Quickstart

1. `yarn add @qest/express-utils` or `npm install @qest/express-utils`
2. Use the provided server wrapper for sane defaults and some useful middleware:
 ```typescript
import { server, corsSetup, Logger } from "@qest/express-utils";
import express from "express";
import { mySuperLogger } from './my-supper-logger.ts'

const app = express();

app.get("/hello-world", (req, res, next) => {
    try {
        ...
    } catch (err){
        // It is important for the error handling to catch the error and send it to the nextFunction! Otherwise it will not work properly.
        next(err)
    }
});

const expressServer = server({
  logger: mySupperLogger,
  router: app,
  middleware: {
    preRequest: [corsSetup("*"), ...],
  },
});

const port = 8080
expressServer
  .listen(port, () => {
    mySupperLogger.info(`[Express] Listening at ${port}`);
  })
  .on("error", (e) => mySupperLogger.error(e));

```

## What is included

### Server wrapper

The package contains a simple server wrapper that will provide some sane defaults and middleware

#### Options parameters

For more info about the available options **see the in-code "ExpressApp" interface documentation**

// TODO Add a reference to generated tsdoc?

#### Middleware added by default

For more info about the each middleware **see the in-code "ExpressApp" interface documentation**

// TODO Add a reference to generated tsdoc?


// TODO info about other bundled libs like getRobots and etc...