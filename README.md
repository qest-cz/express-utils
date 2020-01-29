# Express utils

Make our express applications normalized, use same error handling, requests logging, etc. Make same security settings and outputs for all aplications.

Package include basic normalized express server with pre and post middlewares for each requests (like cors, rate limiter, body parsing, etc). 
Package has simply error handler for each request witch correctly work with throwed HTTP errors from [@qest/error-utils](https://www.npmjs.com/package/@qest/error-utils) package. 
Also log each error or request with [@qest/logger-utils](https://www.npmjs.com/package/@qest/logger-utils) package or custom logger.

## Instalation
Install package to our dependencies from NPM.
```
yarn add @qest/express-utils
```
or
```
npm install @qest/express-utils
```

## What is in package

### Server
It make instance of express server with our routes and some default features.
```typescript
const expressServer: (options: IExpressApp, config?: IExpressConfig) => core.Express= server({...}, {...});
```
#### Options parameters
- `router: Router` - Router for our application. 
- `logger ?: ILogger` - Implementation of logger interface, whitch is used for predefined request logger or error handler.
- `middlewares` - Basic middlewares whitch is used for all requests.
    - `rateLimiter?: Handler` - Middleware for rate limiting. You can use predefined `rateLimiter`.
    - `logRequest?: Handler` - If you can log each request to some logging service. You can use predefined `logRequest` whitch use ILogger implementation. 
    - `notFoundHandler?: Handler` - Handler for normalization of not recognized routes from router. You can use predefined `notFoundHandler`. 
    - `errorHandler?: ErrorRequestHandler` - Our custom error handler or predefined `errorHandler`.
- `preMiddleware?: Handler[]` - Custom middlewares which is before router. 
- `postMiddleware?: Handler[]` - Custom middlewares which is after router.
- `bodyParser?: Handler` - Custom body parsing middleware, if it isn't set, default parser is from package [body-parser](https://www.npmjs.com/package/body-parser).
- `urlParser?: Handler` - Custom url parsing middleware, if it isn't set, default parser is from package [body-parser](https://www.npmjs.com/package/body-parser).

#### Config parameters
- `useSentry?: boolean` - If it's true, `Sentry.Handlers.errorHandler` was used. Default value is false
- `useDefaultMiddlewares?: boolean` - If it's true, preconfigured middlewares from this package was used. Every default middleware you can override via options middlewares Default middlewares are with this setting:
    ```typescript
    notFoundHandler,
    errorHandler: errorHandler(logger),
    logRequest: logRequest(logger),
    rateLimiter: rateLimiter({ windowMs: 5 * 1000, max: 500, enabled: true }),
    ```
## Usage
First you must have router for our application with controllers of each route.

If you type controllers for routes, every must have try-catch statement with calling next function in catch. It's important for error handling.

You can use prepared controllers for robots.txt and favicon.ico.
```typescript
import { Router } from 'express';
import { getFavicon, getRobots } from '@qest/express-utils';

export const router = Router()
    // use predefined controllers
    .get('/favicon.ico', getFavicon)
    .get('/robots.txt', getRobots)  
    
    //
    .get('/', (req, res, next) => {
        //
        try {
            res.send({ foo: 'bar' });
        } catch (e) {
            next(e);    
        }
    })        
    
    // some controllers may be throw errors in code
    .get('/throw', (req, res, next) => {
        try {
            new Error('throwed error');
        } catch (e) {
            next(e);
        }
    }); // some route throw error, because there is mistake
```
Controller `getFavicon` return no-content response with status 204.
Controller `getRobots` return text with disalow indexing. 

Now you must have prepared logger whitch implemented 'ILogger', or you can use our logger from [@qest/logger-utils](https://www.npmjs.com/package/@qest/logger-utils) package.

```typescript
import { ILoggger } from '@qest/express-utils';

const logger: ILogger = {
    fatal: msg => console.error(msg),
    error: msg => console.error(msg),
    warn: msg => console.warn(msg),
    info: msg => console.info(msg),
    debug: msg => console.debug(msg),
    trace: msg => console.trace(msg),
}
``` 

Now you can configure our express server and listen to them.

```typescript
import { server, corsSetup } from './dist';

const expressServer = server({
    logger,
    router,
    preMiddleware: [corsSetup('*')],   
}, {
    useDefaultMiddlewares: true,
});

export const listen = () => {
    return expressServer
        .listen(8080, () => {
            logger.info('[Express] Listening at 8080');
        })
        .on('error', (e) => logger.error(e));
};

listen();
```