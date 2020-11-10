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

*Defined in [src/interfaces.ts:92](https://github.com/qest-cz/express-utils/blob/4a9edb6/src/interfaces.ts#L92)*

[Default] Standard implementation utilizing the [body-parser](https://www.npmjs.com/package/body-parser)
library with sane defaults

**`default`** Handler

___

### errorHandler

• `Optional` **errorHandler**: ErrorRequestHandler \| null

*Defined in [src/interfaces.ts:85](https://github.com/qest-cz/express-utils/blob/4a9edb6/src/interfaces.ts#L85)*

[Default] Implementation utilizing the provided logger

**`default`** ErrorRequestHandler

___

### logRequest

• `Optional` **logRequest**: Handler \| null

*Defined in [src/interfaces.ts:71](https://github.com/qest-cz/express-utils/blob/4a9edb6/src/interfaces.ts#L71)*

[Default] Implementation utilizing the provided logger

**`default`** Handler

___

### notFoundHandler

• `Optional` **notFoundHandler**: Handler \| null

*Defined in [src/interfaces.ts:79](https://github.com/qest-cz/express-utils/blob/4a9edb6/src/interfaces.ts#L79)*

[Default] Generic implementation

Handler for normalization of unrecognized routes

**`default`** Handler

___

### rateLimiter

• `Optional` **rateLimiter**: Handler \| null

*Defined in [src/interfaces.ts:65](https://github.com/qest-cz/express-utils/blob/4a9edb6/src/interfaces.ts#L65)*

[Default] Implementation with sane values

**`default`** Handler

___

### urlParser

• `Optional` **urlParser**: Handler \| null

*Defined in [src/interfaces.ts:99](https://github.com/qest-cz/express-utils/blob/4a9edb6/src/interfaces.ts#L99)*

[Default] Standard implementation utilizing the [body-parser](https://www.npmjs.com/package/body-parser)
library with sane defaults

**`default`** Handler
