**[@qest/express-utils](../README.md)**

> [Globals](../README.md) / ["interfaces"](../modules/_interfaces_.md) / BasicAppRequest

# Interface: BasicAppRequest\<T, P>

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`T` | [BasicUser](_interfaces_.basicuser.md) | - |
`P` | Params | ParamsDictionary |

## Hierarchy

* Request

  ↳ **BasicAppRequest**

## Implements

* ReadableStream

## Index

### Constructors

* [constructor](_interfaces_.basicapprequest.md#constructor)

### Properties

* [accepted](_interfaces_.basicapprequest.md#accepted)
* [app](_interfaces_.basicapprequest.md#app)
* [baseUrl](_interfaces_.basicapprequest.md#baseurl)
* [body](_interfaces_.basicapprequest.md#body)
* [complete](_interfaces_.basicapprequest.md#complete)
* [connection](_interfaces_.basicapprequest.md#connection)
* [cookies](_interfaces_.basicapprequest.md#cookies)
* [destroyed](_interfaces_.basicapprequest.md#destroyed)
* [fresh](_interfaces_.basicapprequest.md#fresh)
* [headers](_interfaces_.basicapprequest.md#headers)
* [host](_interfaces_.basicapprequest.md#host)
* [hostname](_interfaces_.basicapprequest.md#hostname)
* [httpVersion](_interfaces_.basicapprequest.md#httpversion)
* [httpVersionMajor](_interfaces_.basicapprequest.md#httpversionmajor)
* [httpVersionMinor](_interfaces_.basicapprequest.md#httpversionminor)
* [ip](_interfaces_.basicapprequest.md#ip)
* [ips](_interfaces_.basicapprequest.md#ips)
* [method](_interfaces_.basicapprequest.md#method)
* [next](_interfaces_.basicapprequest.md#next)
* [originalUrl](_interfaces_.basicapprequest.md#originalurl)
* [params](_interfaces_.basicapprequest.md#params)
* [path](_interfaces_.basicapprequest.md#path)
* [protocol](_interfaces_.basicapprequest.md#protocol)
* [query](_interfaces_.basicapprequest.md#query)
* [rawHeaders](_interfaces_.basicapprequest.md#rawheaders)
* [rawTrailers](_interfaces_.basicapprequest.md#rawtrailers)
* [readable](_interfaces_.basicapprequest.md#readable)
* [readableHighWaterMark](_interfaces_.basicapprequest.md#readablehighwatermark)
* [readableLength](_interfaces_.basicapprequest.md#readablelength)
* [readableObjectMode](_interfaces_.basicapprequest.md#readableobjectmode)
* [res](_interfaces_.basicapprequest.md#res)
* [route](_interfaces_.basicapprequest.md#route)
* [secure](_interfaces_.basicapprequest.md#secure)
* [signedCookies](_interfaces_.basicapprequest.md#signedcookies)
* [socket](_interfaces_.basicapprequest.md#socket)
* [stale](_interfaces_.basicapprequest.md#stale)
* [statusCode](_interfaces_.basicapprequest.md#statuscode)
* [statusMessage](_interfaces_.basicapprequest.md#statusmessage)
* [subdomains](_interfaces_.basicapprequest.md#subdomains)
* [trailers](_interfaces_.basicapprequest.md#trailers)
* [url](_interfaces_.basicapprequest.md#url)
* [user](_interfaces_.basicapprequest.md#user)
* [xhr](_interfaces_.basicapprequest.md#xhr)
* [defaultMaxListeners](_interfaces_.basicapprequest.md#defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_interfaces_.basicapprequest.md#[symbol.asynciterator])
* [\_destroy](_interfaces_.basicapprequest.md#_destroy)
* [\_read](_interfaces_.basicapprequest.md#_read)
* [accepts](_interfaces_.basicapprequest.md#accepts)
* [acceptsCharsets](_interfaces_.basicapprequest.md#acceptscharsets)
* [acceptsEncodings](_interfaces_.basicapprequest.md#acceptsencodings)
* [acceptsLanguages](_interfaces_.basicapprequest.md#acceptslanguages)
* [addListener](_interfaces_.basicapprequest.md#addlistener)
* [destroy](_interfaces_.basicapprequest.md#destroy)
* [emit](_interfaces_.basicapprequest.md#emit)
* [eventNames](_interfaces_.basicapprequest.md#eventnames)
* [get](_interfaces_.basicapprequest.md#get)
* [getMaxListeners](_interfaces_.basicapprequest.md#getmaxlisteners)
* [header](_interfaces_.basicapprequest.md#header)
* [is](_interfaces_.basicapprequest.md#is)
* [isPaused](_interfaces_.basicapprequest.md#ispaused)
* [listenerCount](_interfaces_.basicapprequest.md#listenercount)
* [listeners](_interfaces_.basicapprequest.md#listeners)
* [off](_interfaces_.basicapprequest.md#off)
* [on](_interfaces_.basicapprequest.md#on)
* [once](_interfaces_.basicapprequest.md#once)
* [param](_interfaces_.basicapprequest.md#param)
* [pause](_interfaces_.basicapprequest.md#pause)
* [pipe](_interfaces_.basicapprequest.md#pipe)
* [prependListener](_interfaces_.basicapprequest.md#prependlistener)
* [prependOnceListener](_interfaces_.basicapprequest.md#prependoncelistener)
* [push](_interfaces_.basicapprequest.md#push)
* [range](_interfaces_.basicapprequest.md#range)
* [rawListeners](_interfaces_.basicapprequest.md#rawlisteners)
* [read](_interfaces_.basicapprequest.md#read)
* [removeAllListeners](_interfaces_.basicapprequest.md#removealllisteners)
* [removeListener](_interfaces_.basicapprequest.md#removelistener)
* [resume](_interfaces_.basicapprequest.md#resume)
* [setEncoding](_interfaces_.basicapprequest.md#setencoding)
* [setMaxListeners](_interfaces_.basicapprequest.md#setmaxlisteners)
* [setTimeout](_interfaces_.basicapprequest.md#settimeout)
* [unpipe](_interfaces_.basicapprequest.md#unpipe)
* [unshift](_interfaces_.basicapprequest.md#unshift)
* [wrap](_interfaces_.basicapprequest.md#wrap)
* [from](_interfaces_.basicapprequest.md#from)
* [listenerCount](_interfaces_.basicapprequest.md#listenercount)

## Constructors

### constructor

\+ **new BasicAppRequest**(`socket`: Socket): [BasicAppRequest](_interfaces_.basicapprequest.md)

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[constructor](_interfaces_.basicapprequest.md#constructor)*

*Overrides void*

*Defined in node_modules/@types/node/http.d.ts:268*

#### Parameters:

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** [BasicAppRequest](_interfaces_.basicapprequest.md)

## Properties

### accepted

•  **accepted**: MediaType[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[accepted](_interfaces_.basicapprequest.md#accepted)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:328*

Return an array of Accepted media types
ordered from highest quality to lowest.

___

### app

•  **app**: Application

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[app](_interfaces_.basicapprequest.md#app)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:471*

___

### baseUrl

•  **baseUrl**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[baseUrl](_interfaces_.basicapprequest.md#baseurl)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:469*

___

### body

•  **body**: any

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[body](_interfaces_.basicapprequest.md#body)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:450*

___

### complete

•  **complete**: boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[complete](_interfaces_.basicapprequest.md#complete)*

*Defined in node_modules/@types/node/http.d.ts:274*

___

### connection

•  **connection**: Socket

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[connection](_interfaces_.basicapprequest.md#connection)*

*Defined in node_modules/@types/node/http.d.ts:275*

___

### cookies

•  **cookies**: any

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[cookies](_interfaces_.basicapprequest.md#cookies)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:453*

___

### destroyed

•  **destroyed**: boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[destroyed](_interfaces_.basicapprequest.md#destroyed)*

*Defined in node_modules/@types/node/stream.d.ts:30*

___

### fresh

•  **fresh**: boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[fresh](_interfaces_.basicapprequest.md#fresh)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:435*

Check if the request is fresh, aka
Last-Modified and/or the ETag
still match.

___

### headers

•  **headers**: IncomingHttpHeaders

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[headers](_interfaces_.basicapprequest.md#headers)*

*Defined in node_modules/@types/node/http.d.ts:276*

___

### host

•  **host**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[host](_interfaces_.basicapprequest.md#host)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:428*

**`deprecated`** Use hostname instead.

___

### hostname

•  **hostname**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[hostname](_interfaces_.basicapprequest.md#hostname)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:423*

Parse the "Host" header field hostname.

___

### httpVersion

•  **httpVersion**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[httpVersion](_interfaces_.basicapprequest.md#httpversion)*

*Defined in node_modules/@types/node/http.d.ts:271*

___

### httpVersionMajor

•  **httpVersionMajor**: number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[httpVersionMajor](_interfaces_.basicapprequest.md#httpversionmajor)*

*Defined in node_modules/@types/node/http.d.ts:272*

___

### httpVersionMinor

•  **httpVersionMinor**: number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[httpVersionMinor](_interfaces_.basicapprequest.md#httpversionminor)*

*Defined in node_modules/@types/node/http.d.ts:273*

___

### ip

•  **ip**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[ip](_interfaces_.basicapprequest.md#ip)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:390*

Return the remote address, or when
"trust proxy" is `true` return
the upstream addr.

___

### ips

•  **ips**: string[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[ips](_interfaces_.basicapprequest.md#ips)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:400*

When "trust proxy" is `true`, parse
the "X-Forwarded-For" ip address list.

For example if the value were "client, proxy1, proxy2"
you would receive the array `["client", "proxy1", "proxy2"]`
where "proxy2" is the furthest down-stream.

___

### method

•  **method**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[method](_interfaces_.basicapprequest.md#method)*

*Overrides void*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:455*

___

### next

• `Optional` **next**: NextFunction

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[next](_interfaces_.basicapprequest.md#next)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:478*

___

### originalUrl

•  **originalUrl**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[originalUrl](_interfaces_.basicapprequest.md#originalurl)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:465*

___

### params

•  **params**: P

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[params](_interfaces_.basicapprequest.md#params)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:457*

___

### path

•  **path**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[path](_interfaces_.basicapprequest.md#path)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:418*

Short-hand for `url.parse(req.url).pathname`.

___

### protocol

•  **protocol**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[protocol](_interfaces_.basicapprequest.md#protocol)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:376*

Return the protocol string "http" or "https"
when requested with TLS. When the "trust proxy"
setting is enabled the "X-Forwarded-Proto" header
field will be trusted. If you're running behind
a reverse proxy that supplies https for you this
may be enabled.

___

### query

•  **query**: any

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[query](_interfaces_.basicapprequest.md#query)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:459*

___

### rawHeaders

•  **rawHeaders**: string[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[rawHeaders](_interfaces_.basicapprequest.md#rawheaders)*

*Defined in node_modules/@types/node/http.d.ts:277*

___

### rawTrailers

•  **rawTrailers**: string[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[rawTrailers](_interfaces_.basicapprequest.md#rawtrailers)*

*Defined in node_modules/@types/node/http.d.ts:279*

___

### readable

•  **readable**: boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[readable](_interfaces_.basicapprequest.md#readable)*

*Defined in node_modules/@types/node/stream.d.ts:26*

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[readableHighWaterMark](_interfaces_.basicapprequest.md#readablehighwatermark)*

*Defined in node_modules/@types/node/stream.d.ts:27*

___

### readableLength

• `Readonly` **readableLength**: number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[readableLength](_interfaces_.basicapprequest.md#readablelength)*

*Defined in node_modules/@types/node/stream.d.ts:28*

___

### readableObjectMode

• `Readonly` **readableObjectMode**: boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[readableObjectMode](_interfaces_.basicapprequest.md#readableobjectmode)*

*Defined in node_modules/@types/node/stream.d.ts:29*

___

### res

• `Optional` **res**: Response

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[res](_interfaces_.basicapprequest.md#res)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:477*

After middleware.init executed, Request will contain res and next properties
See: express/lib/middleware/init.js

___

### route

•  **route**: any

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[route](_interfaces_.basicapprequest.md#route)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:461*

___

### secure

•  **secure**: boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[secure](_interfaces_.basicapprequest.md#secure)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:383*

Short-hand for:

   req.protocol == 'https'

___

### signedCookies

•  **signedCookies**: any

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[signedCookies](_interfaces_.basicapprequest.md#signedcookies)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:463*

___

### socket

•  **socket**: Socket

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[socket](_interfaces_.basicapprequest.md#socket)*

*Defined in node_modules/@types/node/http.d.ts:297*

___

### stale

•  **stale**: boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[stale](_interfaces_.basicapprequest.md#stale)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:442*

Check if the request is stale, aka
"Last-Modified" and / or the "ETag" for the
resource has changed.

___

### statusCode

• `Optional` **statusCode**: undefined \| number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[statusCode](_interfaces_.basicapprequest.md#statuscode)*

*Defined in node_modules/@types/node/http.d.ts:292*

Only valid for response obtained from http.ClientRequest.

___

### statusMessage

• `Optional` **statusMessage**: undefined \| string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[statusMessage](_interfaces_.basicapprequest.md#statusmessage)*

*Defined in node_modules/@types/node/http.d.ts:296*

Only valid for response obtained from http.ClientRequest.

___

### subdomains

•  **subdomains**: string[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[subdomains](_interfaces_.basicapprequest.md#subdomains)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:413*

Return subdomains as an array.

Subdomains are the dot-separated parts of the host before the main domain of
the app. By default, the domain of the app is assumed to be the last two
parts of the host. This can be changed by setting "subdomain offset".

For example, if the domain is "tobi.ferrets.example.com":
If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
If "subdomain offset" is 3, req.subdomains is `["tobi"]`.

___

### trailers

•  **trailers**: { [key:string]: string \| undefined;  }

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[trailers](_interfaces_.basicapprequest.md#trailers)*

*Defined in node_modules/@types/node/http.d.ts:278*

___

### url

•  **url**: string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[url](_interfaces_.basicapprequest.md#url)*

*Overrides void*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:467*

___

### user

• `Optional` **user**: T

*Defined in [src/interfaces.ts:102](https://github.com/qest-cz/express-utils/blob/b2be23b/src/interfaces.ts#L102)*

___

### xhr

•  **xhr**: boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[xhr](_interfaces_.basicapprequest.md#xhr)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:447*

Check if the request was an _XMLHttpRequest_.

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[defaultMaxListeners](_interfaces_.basicapprequest.md#defaultmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:18*

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): AsyncIterableIterator\<any>

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[[Symbol.asyncIterator]](_interfaces_.basicapprequest.md#[symbol.asynciterator])*

*Defined in node_modules/@types/node/stream.d.ts:103*

**Returns:** AsyncIterableIterator\<any>

___

### \_destroy

▸ **_destroy**(`error`: Error \| null, `callback`: (error?: Error \| null) => void): void

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[_destroy](_interfaces_.basicapprequest.md#_destroy)*

*Defined in node_modules/@types/node/stream.d.ts:42*

#### Parameters:

Name | Type |
------ | ------ |
`error` | Error \| null |
`callback` | (error?: Error \| null) => void |

**Returns:** void

___

### \_read

▸ **_read**(`size`: number): void

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[_read](_interfaces_.basicapprequest.md#_read)*

*Defined in node_modules/@types/node/stream.d.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`size` | number |

**Returns:** void

___

### accepts

▸ **accepts**(): string[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[accepts](_interfaces_.basicapprequest.md#accepts)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:268*

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimted list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:

    // Accept: text/html
    req.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    req.accepts('html');
    // => "html"
    req.accepts('text/html');
    // => "text/html"
    req.accepts('json, text');
    // => "json"
    req.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    req.accepts('image/png');
    req.accepts('png');
    // => undefined

    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json']);
    req.accepts('html, json');
    // => "json"

**Returns:** string[]

▸ **accepts**(`type`: string): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[accepts](_interfaces_.basicapprequest.md#accepts)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:269*

#### Parameters:

Name | Type |
------ | ------ |
`type` | string |

**Returns:** string \| false

▸ **accepts**(`type`: string[]): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[accepts](_interfaces_.basicapprequest.md#accepts)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:270*

#### Parameters:

Name | Type |
------ | ------ |
`type` | string[] |

**Returns:** string \| false

▸ **accepts**(...`type`: string[]): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[accepts](_interfaces_.basicapprequest.md#accepts)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:271*

#### Parameters:

Name | Type |
------ | ------ |
`...type` | string[] |

**Returns:** string \| false

___

### acceptsCharsets

▸ **acceptsCharsets**(): string[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsCharsets](_interfaces_.basicapprequest.md#acceptscharsets)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:280*

Returns the first accepted charset of the specified character sets,
based on the request's Accept-Charset HTTP header field.
If none of the specified charsets is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

**Returns:** string[]

▸ **acceptsCharsets**(`charset`: string): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsCharsets](_interfaces_.basicapprequest.md#acceptscharsets)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:281*

#### Parameters:

Name | Type |
------ | ------ |
`charset` | string |

**Returns:** string \| false

▸ **acceptsCharsets**(`charset`: string[]): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsCharsets](_interfaces_.basicapprequest.md#acceptscharsets)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:282*

#### Parameters:

Name | Type |
------ | ------ |
`charset` | string[] |

**Returns:** string \| false

▸ **acceptsCharsets**(...`charset`: string[]): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsCharsets](_interfaces_.basicapprequest.md#acceptscharsets)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:283*

#### Parameters:

Name | Type |
------ | ------ |
`...charset` | string[] |

**Returns:** string \| false

___

### acceptsEncodings

▸ **acceptsEncodings**(): string[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsEncodings](_interfaces_.basicapprequest.md#acceptsencodings)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:292*

Returns the first accepted encoding of the specified encodings,
based on the request's Accept-Encoding HTTP header field.
If none of the specified encodings is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

**Returns:** string[]

▸ **acceptsEncodings**(`encoding`: string): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsEncodings](_interfaces_.basicapprequest.md#acceptsencodings)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:293*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** string \| false

▸ **acceptsEncodings**(`encoding`: string[]): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsEncodings](_interfaces_.basicapprequest.md#acceptsencodings)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:294*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | string[] |

**Returns:** string \| false

▸ **acceptsEncodings**(...`encoding`: string[]): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsEncodings](_interfaces_.basicapprequest.md#acceptsencodings)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:295*

#### Parameters:

Name | Type |
------ | ------ |
`...encoding` | string[] |

**Returns:** string \| false

___

### acceptsLanguages

▸ **acceptsLanguages**(): string[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsLanguages](_interfaces_.basicapprequest.md#acceptslanguages)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:304*

Returns the first accepted language of the specified languages,
based on the request's Accept-Language HTTP header field.
If none of the specified languages is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

**Returns:** string[]

▸ **acceptsLanguages**(`lang`: string): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsLanguages](_interfaces_.basicapprequest.md#acceptslanguages)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:305*

#### Parameters:

Name | Type |
------ | ------ |
`lang` | string |

**Returns:** string \| false

▸ **acceptsLanguages**(`lang`: string[]): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsLanguages](_interfaces_.basicapprequest.md#acceptslanguages)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:306*

#### Parameters:

Name | Type |
------ | ------ |
`lang` | string[] |

**Returns:** string \| false

▸ **acceptsLanguages**(...`lang`: string[]): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[acceptsLanguages](_interfaces_.basicapprequest.md#acceptslanguages)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:307*

#### Parameters:

Name | Type |
------ | ------ |
`...lang` | string[] |

**Returns:** string \| false

___

### addListener

▸ **addListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[addListener](_interfaces_.basicapprequest.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:54*

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. readable
5. error

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[addListener](_interfaces_.basicapprequest.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:55*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **addListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[addListener](_interfaces_.basicapprequest.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:56*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[addListener](_interfaces_.basicapprequest.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:57*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **addListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[addListener](_interfaces_.basicapprequest.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:58*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[addListener](_interfaces_.basicapprequest.md#addlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:59*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### destroy

▸ **destroy**(`error?`: Error): void

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[destroy](_interfaces_.basicapprequest.md#destroy)*

*Overrides void*

*Defined in node_modules/@types/node/http.d.ts:298*

#### Parameters:

Name | Type |
------ | ------ |
`error?` | Error |

**Returns:** void

___

### emit

▸ **emit**(`event`: \"close\"): boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[emit](_interfaces_.basicapprequest.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:61*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |

**Returns:** boolean

▸ **emit**(`event`: \"data\", `chunk`: any): boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[emit](_interfaces_.basicapprequest.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:62*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`chunk` | any |

**Returns:** boolean

▸ **emit**(`event`: \"end\"): boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[emit](_interfaces_.basicapprequest.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:63*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |

**Returns:** boolean

▸ **emit**(`event`: \"readable\"): boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[emit](_interfaces_.basicapprequest.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:64*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |

**Returns:** boolean

▸ **emit**(`event`: \"error\", `err`: Error): boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[emit](_interfaces_.basicapprequest.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:65*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`err` | Error |

**Returns:** boolean

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[emit](_interfaces_.basicapprequest.md#emit)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:66*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** boolean

___

### eventNames

▸ **eventNames**(): Array\<string \| symbol>

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[eventNames](_interfaces_.basicapprequest.md#eventnames)*

*Defined in node_modules/@types/node/events.d.ts:33*

**Returns:** Array\<string \| symbol>

___

### get

▸ **get**(`name`: \"set-cookie\"): string[] \| undefined

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[get](_interfaces_.basicapprequest.md#get)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:225*

Return request header.

The `Referrer` header field is special-cased,
both `Referrer` and `Referer` are interchangeable.

Examples:

    req.get('Content-Type');
    // => "text/plain"

    req.get('content-type');
    // => "text/plain"

    req.get('Something');
    // => undefined

Aliased as `req.header()`.

#### Parameters:

Name | Type |
------ | ------ |
`name` | \"set-cookie\" |

**Returns:** string[] \| undefined

▸ **get**(`name`: string): string \| undefined

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[get](_interfaces_.basicapprequest.md#get)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:226*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** string \| undefined

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[getMaxListeners](_interfaces_.basicapprequest.md#getmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:29*

**Returns:** number

___

### header

▸ **header**(`name`: \"set-cookie\"): string[] \| undefined

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[header](_interfaces_.basicapprequest.md#header)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:228*

#### Parameters:

Name | Type |
------ | ------ |
`name` | \"set-cookie\" |

**Returns:** string[] \| undefined

▸ **header**(`name`: string): string \| undefined

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[header](_interfaces_.basicapprequest.md#header)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:229*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** string \| undefined

___

### is

▸ **is**(`type`: string): string \| false

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[is](_interfaces_.basicapprequest.md#is)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:366*

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:

     // With Content-Type: text/html; charset=utf-8
     req.is('html');
     req.is('text/html');
     req.is('text/*');
     // => true

     // When Content-Type is application/json
     req.is('json');
     req.is('application/json');
     req.is('application/*');
     // => true

     req.is('html');
     // => false

#### Parameters:

Name | Type |
------ | ------ |
`type` | string |

**Returns:** string \| false

___

### isPaused

▸ **isPaused**(): boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[isPaused](_interfaces_.basicapprequest.md#ispaused)*

*Defined in node_modules/@types/node/stream.d.ts:37*

**Returns:** boolean

___

### listenerCount

▸ **listenerCount**(`type`: string \| symbol): number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[listenerCount](_interfaces_.basicapprequest.md#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:34*

#### Parameters:

Name | Type |
------ | ------ |
`type` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[listeners](_interfaces_.basicapprequest.md#listeners)*

*Defined in node_modules/@types/node/events.d.ts:30*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[off](_interfaces_.basicapprequest.md#off)*

*Defined in node_modules/@types/node/events.d.ts:26*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### on

▸ **on**(`event`: \"close\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[on](_interfaces_.basicapprequest.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:68*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[on](_interfaces_.basicapprequest.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:69*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **on**(`event`: \"end\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[on](_interfaces_.basicapprequest.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:70*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[on](_interfaces_.basicapprequest.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:71*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **on**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[on](_interfaces_.basicapprequest.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:72*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[on](_interfaces_.basicapprequest.md#on)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:73*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### once

▸ **once**(`event`: \"close\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[once](_interfaces_.basicapprequest.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:75*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[once](_interfaces_.basicapprequest.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:76*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **once**(`event`: \"end\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[once](_interfaces_.basicapprequest.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:77*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[once](_interfaces_.basicapprequest.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:78*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **once**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[once](_interfaces_.basicapprequest.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:79*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[once](_interfaces_.basicapprequest.md#once)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:80*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### param

▸ **param**(`name`: string, `defaultValue?`: any): string

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[param](_interfaces_.basicapprequest.md#param)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:343*

**`deprecated`** since 4.11 Use either req.params, req.body or req.query, as applicable.

Return the value of param `name` when present or `defaultValue`.

 - Checks route placeholders, ex: _/user/:id_
 - Checks body params, ex: id=12, {"id":12}
 - Checks query string params, ex: ?id=12

To utilize request bodies, `req.body`
should be an object. This can be done by using
the `connect.bodyParser()` middleware.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`defaultValue?` | any |

**Returns:** string

___

### pause

▸ **pause**(): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[pause](_interfaces_.basicapprequest.md#pause)*

*Defined in node_modules/@types/node/stream.d.ts:35*

**Returns:** this

___

### pipe

▸ **pipe**\<T>(`destination`: T, `options?`: undefined \| { end?: undefined \| false \| true  }): T

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[pipe](_interfaces_.basicapprequest.md#pipe)*

*Defined in node_modules/@types/node/stream.d.ts:5*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | WritableStream |

#### Parameters:

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined \| { end?: undefined \| false \| true  } |

**Returns:** T

___

### prependListener

▸ **prependListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependListener](_interfaces_.basicapprequest.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:82*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependListener](_interfaces_.basicapprequest.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:83*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **prependListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependListener](_interfaces_.basicapprequest.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:84*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependListener](_interfaces_.basicapprequest.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:85*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **prependListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependListener](_interfaces_.basicapprequest.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:86*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependListener](_interfaces_.basicapprequest.md#prependlistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:87*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependOnceListener

▸ **prependOnceListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependOnceListener](_interfaces_.basicapprequest.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:89*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependOnceListener](_interfaces_.basicapprequest.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:90*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependOnceListener](_interfaces_.basicapprequest.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:91*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependOnceListener](_interfaces_.basicapprequest.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:92*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **prependOnceListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependOnceListener](_interfaces_.basicapprequest.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:93*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[prependOnceListener](_interfaces_.basicapprequest.md#prependoncelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:94*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### push

▸ **push**(`chunk`: any, `encoding?`: undefined \| string): boolean

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[push](_interfaces_.basicapprequest.md#push)*

*Defined in node_modules/@types/node/stream.d.ts:41*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined \| string |

**Returns:** boolean

___

### range

▸ **range**(`size`: number, `options?`: RangeParserOptions): RangeParserRanges \| RangeParserResult \| undefined

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[range](_interfaces_.basicapprequest.md#range)*

*Defined in node_modules/@types/express-serve-static-core/index.d.ts:322*

Parse Range header field, capping to the given `size`.

Unspecified ranges such as "0-" require knowledge of your resource length. In
the case of a byte range this is of course the total number of bytes.
If the Range header field is not given `undefined` is returned.
If the Range header field is given, return value is a result of range-parser.
See more ./types/range-parser/index.d.ts

NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
should respond with 4 users when available, not 3.

#### Parameters:

Name | Type |
------ | ------ |
`size` | number |
`options?` | RangeParserOptions |

**Returns:** RangeParserRanges \| RangeParserResult \| undefined

___

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[rawListeners](_interfaces_.basicapprequest.md#rawlisteners)*

*Defined in node_modules/@types/node/events.d.ts:31*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### read

▸ **read**(`size?`: undefined \| number): any

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[read](_interfaces_.basicapprequest.md#read)*

*Defined in node_modules/@types/node/stream.d.ts:33*

#### Parameters:

Name | Type |
------ | ------ |
`size?` | undefined \| number |

**Returns:** any

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[removeAllListeners](_interfaces_.basicapprequest.md#removealllisteners)*

*Defined in node_modules/@types/node/events.d.ts:27*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: \"close\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[removeListener](_interfaces_.basicapprequest.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:96*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"close\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"data\", `listener`: (chunk: any) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[removeListener](_interfaces_.basicapprequest.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:97*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"data\" |
`listener` | (chunk: any) => void |

**Returns:** this

▸ **removeListener**(`event`: \"end\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[removeListener](_interfaces_.basicapprequest.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:98*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"end\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"readable\", `listener`: () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[removeListener](_interfaces_.basicapprequest.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:99*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"readable\" |
`listener` | () => void |

**Returns:** this

▸ **removeListener**(`event`: \"error\", `listener`: (err: Error) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[removeListener](_interfaces_.basicapprequest.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:100*

#### Parameters:

Name | Type |
------ | ------ |
`event` | \"error\" |
`listener` | (err: Error) => void |

**Returns:** this

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[removeListener](_interfaces_.basicapprequest.md#removelistener)*

*Overrides void*

*Defined in node_modules/@types/node/stream.d.ts:101*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### resume

▸ **resume**(): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[resume](_interfaces_.basicapprequest.md#resume)*

*Defined in node_modules/@types/node/stream.d.ts:36*

**Returns:** this

___

### setEncoding

▸ **setEncoding**(`encoding`: string): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[setEncoding](_interfaces_.basicapprequest.md#setencoding)*

*Defined in node_modules/@types/node/stream.d.ts:34*

#### Parameters:

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** this

___

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[setMaxListeners](_interfaces_.basicapprequest.md#setmaxlisteners)*

*Defined in node_modules/@types/node/events.d.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### setTimeout

▸ **setTimeout**(`msecs`: number, `callback?`: undefined \| () => void): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[setTimeout](_interfaces_.basicapprequest.md#settimeout)*

*Defined in node_modules/@types/node/http.d.ts:280*

#### Parameters:

Name | Type |
------ | ------ |
`msecs` | number |
`callback?` | undefined \| () => void |

**Returns:** this

___

### unpipe

▸ **unpipe**(`destination?`: NodeJS.WritableStream): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[unpipe](_interfaces_.basicapprequest.md#unpipe)*

*Defined in node_modules/@types/node/stream.d.ts:38*

#### Parameters:

Name | Type |
------ | ------ |
`destination?` | NodeJS.WritableStream |

**Returns:** this

___

### unshift

▸ **unshift**(`chunk`: any, `encoding?`: BufferEncoding): void

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[unshift](_interfaces_.basicapprequest.md#unshift)*

*Defined in node_modules/@types/node/stream.d.ts:39*

#### Parameters:

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | BufferEncoding |

**Returns:** void

___

### wrap

▸ **wrap**(`oldStream`: ReadableStream): this

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[wrap](_interfaces_.basicapprequest.md#wrap)*

*Defined in node_modules/@types/node/stream.d.ts:40*

#### Parameters:

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** this

___

### from

▸ `Static`**from**(`iterable`: Iterable\<any> \| AsyncIterable\<any>, `options?`: ReadableOptions): Readable

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[from](_interfaces_.basicapprequest.md#from)*

*Defined in node_modules/@types/node/stream.d.ts:24*

A utility method for creating Readable Streams out of iterators.

#### Parameters:

Name | Type |
------ | ------ |
`iterable` | Iterable\<any> \| AsyncIterable\<any> |
`options?` | ReadableOptions |

**Returns:** Readable

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `event`: string \| symbol): number

*Inherited from [BasicAppRequest](_interfaces_.basicapprequest.md).[listenerCount](_interfaces_.basicapprequest.md#listenercount)*

*Defined in node_modules/@types/node/events.d.ts:17*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** number
