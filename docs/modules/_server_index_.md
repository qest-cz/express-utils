**[@qest/express-utils](../README.md)**

> [Globals](../README.md) / "server/index"

# Module: "server/index"

## Index

### Functions

* [getDefaultJsonParser](_server_index_.md#getdefaultjsonparser)
* [getDefaultUrlParser](_server_index_.md#getdefaulturlparser)
* [server](_server_index_.md#server)

## Functions

### getDefaultJsonParser

▸ `Const`**getDefaultJsonParser**(`options`: OptionsUrlencoded): NextHandleFunction

*Defined in [src/server/index.ts:34](https://github.com/qest-cz/express-utils/blob/e9e3add/src/server/index.ts#L34)*

#### Parameters:

Name | Type |
------ | ------ |
`options` | OptionsUrlencoded |

**Returns:** NextHandleFunction

___

### getDefaultUrlParser

▸ `Const`**getDefaultUrlParser**(`options`: OptionsUrlencoded): NextHandleFunction

*Defined in [src/server/index.ts:37](https://github.com/qest-cz/express-utils/blob/e9e3add/src/server/index.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`options` | OptionsUrlencoded |

**Returns:** NextHandleFunction

___

### server

▸ `Const`**server**(`options`: [ExpressApp](../interfaces/_interfaces_.expressapp.md)): Express

*Defined in [src/server/index.ts:47](https://github.com/qest-cz/express-utils/blob/e9e3add/src/server/index.ts#L47)*

Creates a express app with reasonable defaults and middleware.
It is a simple wrapper around a provided router.

For more info see the options interface: [ExpressApp](../interfaces/_interfaces_.expressapp.md)

#### Parameters:

Name | Type |
------ | ------ |
`options` | [ExpressApp](../interfaces/_interfaces_.expressapp.md) |

**Returns:** Express
