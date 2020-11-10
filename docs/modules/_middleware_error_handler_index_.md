**[@qest/express-utils](../README.md)**

> [Globals](../README.md) / "middleware/error-handler/index"

# Module: "middleware/error-handler/index"

## Index

### Functions

* [errorHandler](_middleware_error_handler_index_.md#errorhandler)
* [sendErrorResponse](_middleware_error_handler_index_.md#senderrorresponse)

## Functions

### errorHandler

▸ `Const`**errorHandler**(`logger`: [Logger](../interfaces/_interfaces_.logger.md)): (Anonymous function)

*Defined in [src/middleware/error-handler/index.ts:9](https://github.com/qest-cz/express-utils/blob/b2be23b/src/middleware/error-handler/index.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`logger` | [Logger](../interfaces/_interfaces_.logger.md) |

**Returns:** (Anonymous function)

___

### sendErrorResponse

▸ `Const`**sendErrorResponse**(`error`: IHttpError, `res`: Response, `next`: NextFunction): void

*Defined in [src/middleware/error-handler/index.ts:50](https://github.com/qest-cz/express-utils/blob/b2be23b/src/middleware/error-handler/index.ts#L50)*

#### Parameters:

Name | Type |
------ | ------ |
`error` | IHttpError |
`res` | Response |
`next` | NextFunction |

**Returns:** void
