**[@qest/express-utils](../README.md)**

> [Globals](../README.md) / ["interfaces"](../modules/_interfaces_.md) / ExpressApp

# Interface: ExpressApp

## Hierarchy

* **ExpressApp**

## Index

### Properties

* [logger](_interfaces_.expressapp.md#logger)
* [middleware](_interfaces_.expressapp.md#middleware)
* [router](_interfaces_.expressapp.md#router)
* [useSentryMiddleware](_interfaces_.expressapp.md#usesentrymiddleware)

## Properties

### logger

•  **logger**: [Logger](_interfaces_.logger.md)

*Defined in [src/interfaces.ts:24](https://github.com/qest-cz/express-utils/blob/e9e3add/src/interfaces.ts#L24)*

Any interface compatible logger.
A recommended option is to use the [@qest/logger-utils](https://www.npmjs.com/package/@qest/logger-utils)

Note that if your logger is capable of logging errors to Sentry, you probably don't want to enable the `useSentryMiddleware` option

___

### middleware

•  **middleware**: { postRequest?: Handler[] ; preRequest?: Handler[] ; specificallyOrdered?: [SpecificallyOrderedMiddleware](_interfaces_.specificallyorderedmiddleware.md)  }

*Defined in [src/interfaces.ts:28](https://github.com/qest-cz/express-utils/blob/e9e3add/src/interfaces.ts#L28)*

See the documentation for each field

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`postRequest?` | Handler[] | This middleware will get executed in-order but other middleware might alter the request context beforehand  Will be executed after the request is handled by the provided router/app  |
`preRequest?` | Handler[] | This middleware will get executed in-order but other middleware might alter the request context beforehand  Will be executed before the request is handled by the provided router/app  |
`specificallyOrdered?` | [SpecificallyOrderedMiddleware](_interfaces_.specificallyorderedmiddleware.md) | These are some middleware functions that are placed in specific places in the middleware chain and their order cannot be altered.  All of these have some sane default implementation provided  If you wish to disable the default middleware, you can pass a `null` value to the appropriate property.  |

___

### router

•  **router**: Router

*Defined in [src/interfaces.ts:17](https://github.com/qest-cz/express-utils/blob/e9e3add/src/interfaces.ts#L17)*

Any express router or app that will be mounted on the root path `/` of the web server.

The `preRequest` and `postRequest` middlewares are placed around this router

___

### useSentryMiddleware

• `Optional` **useSentryMiddleware**: undefined \| false \| true

*Defined in [src/interfaces.ts:11](https://github.com/qest-cz/express-utils/blob/e9e3add/src/interfaces.ts#L11)*

Adds the Sentry `requestHandler` and `errorHandler` to the express middleware stack

For more info about what this will do see the [appropriate documentation](https://docs.sentry.io/platforms/node/guides/express/)

**`default`** false
