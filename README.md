# Express utils

The goal is to normalize our express based applications, use the same error handling, request logging, etc. Use the same security settings and outputs for all applications.

This package includes basic normalized express server with pre and post middlewares for each request (like cors, rate limiter, body parsing, etc). 
Package includes a simple error handler for each request which works well with the HTTP errors from [@qest/error-utils](https://www.npmjs.com/package/@qest/error-utils) package. 
It also logs each error or request with [@qest/logger-utils](https://www.npmjs.com/package/@qest/logger-utils) package or custom logger.

## Docs

All docs except Readme should be pulled from the code typedoc, so you can use that as a reference.

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
  // See the in-code interface documentation (or the generated MD docs referenced lower in readme) for more info about the default middleware added
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
3. Or you can use some request handlers or optional middleware provided by the package
```typescript
import express from "express";
import { noContent, disallowRobots } from '@qest/express-utils'

const app = express();

// You can use provided utility handlers for favicon and robots
app.get('/favicon.ico', noContent)
app.get('/robots.txt', disallowRobots) 

app.get("/hello-world", ...);

const port = 8080
app
  .listen(port, () => {
    mySupperLogger.info(`[Express] Listening at ${port}`);
  })
  .on("error", (e) => mySupperLogger.error(e));
```

## What is included

### Server wrapper

The package contains a simple server wrapper that will provide some sane defaults and middleware.

Refer to step 2. of the [quickstart section](#quickstart)

For more information see the [server function documentation](./docs/modules/_server_index_.md#server)

#### Option parameters

For information about the available options see the [ExpressApp interface documentation](./docs/interfaces/_interfaces_.expressapp.md)

#### Middleware added by default

For information about the added middleware see the [ExpressApp interface documentation](./docs/interfaces/_interfaces_.expressapp.md). The default middleware should be reflected in the ExpressApp interface properties.


### Optional middleware and handlers

The library also provides some handler functions that are not added by the server wrapper and you can use them separately if you wish. 

Refer to step 3. of the [quickstart section](#quickstart)

For more information about the available handlers see the [index file](./docs/modules/_simple_routes_index_.md)