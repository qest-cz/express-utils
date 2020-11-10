**[@qest/express-utils](../README.md)**

> [Globals](../README.md) / ["interfaces"](../modules/_interfaces_.md) / SpecificallyOrderedMiddleware

# Interface: SpecificallyOrderedMiddleware

## Hierarchy

* **SpecificallyOrderedMiddleware**

## Index

### Properties

* [bodyParser](_interfaces_.specificallyorderedmiddleware.md#bodyparser)
* [errorHandler](_interfaces_.specificallyorderedmiddleware.md#errorhandler)
* [logRequest](_interfaces_.specificallyorderedmiddleware.md#logrequest)
* [notFoundHandler](_interfaces_.specificallyorderedmiddleware.md#notfoundhandler)
* [rateLimiter](_interfaces_.specificallyorderedmiddleware.md#ratelimiter)
* [urlParser](_interfaces_.specificallyorderedmiddleware.md#urlparser)

## Properties

### bodyParser

• `Optional` **bodyParser**: Handler \| null

*Defined in [src/interfaces.ts:86](https://github.com/qest-cz/express-utils/blob/b2be23b/src/interfaces.ts#L86)*

Default standard implementation utilizing the [body-parser](https://www.npmjs.com/package/body-parser)
library with sane defaults

**`default`** Handler

___

### errorHandler

• `Optional` **errorHandler**: ErrorRequestHandler \| null

*Defined in [src/interfaces.ts:79](https://github.com/qest-cz/express-utils/blob/b2be23b/src/interfaces.ts#L79)*

Default Implementation utilizing the provided logger

**`default`** ErrorRequestHandler

___

### logRequest

• `Optional` **logRequest**: Handler \| null

*Defined in [src/interfaces.ts:65](https://github.com/qest-cz/express-utils/blob/b2be23b/src/interfaces.ts#L65)*

Default implementation utilizing the provided logger

**`default`** Handler

___

### notFoundHandler

• `Optional` **notFoundHandler**: Handler \| null

*Defined in [src/interfaces.ts:73](https://github.com/qest-cz/express-utils/blob/b2be23b/src/interfaces.ts#L73)*

Default generic implementation

Handler for normalization of unrecognized routes

**`default`** Handler

___

### rateLimiter

• `Optional` **rateLimiter**: Handler \| null

*Defined in [src/interfaces.ts:59](https://github.com/qest-cz/express-utils/blob/b2be23b/src/interfaces.ts#L59)*

Default Implementation with sane values

**`default`** Handler

___

### urlParser

• `Optional` **urlParser**: Handler \| null

*Defined in [src/interfaces.ts:93](https://github.com/qest-cz/express-utils/blob/b2be23b/src/interfaces.ts#L93)*

Default Standard implementation utilizing the [body-parser](https://www.npmjs.com/package/body-parser)
library with sane defaults

**`default`** Handler
