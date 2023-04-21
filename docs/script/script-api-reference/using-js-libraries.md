---
sidebar_position: 2
---

# Using JS libraries

1. Built-In JS Class Libraries

You can use the built-in JS library in Apidog using `require`.

```js
var cryptoJs = require("crypto-js");
console.log(cryptoJs.SHA256("Message"));
```

2. Non-Built-In JS Class Libraries

You can introduce numerous other libraries that are not built-in but have been made available on npm dynamically using the `$$.liveRequire` function. Only pure js libraries are supported, preferably libraries with the word browser written to support browser-side operation. Libraries containing language extensions such as C/C++ are not supported for loading and will run out of time or exceptions.

:::tip Please be aware that:

You need to download JS libraries from the network for non-built-in libraries. Therefore, you must be connected to the internet. There will be a performance loss to downloading libraries on the run. Therefore, we recommend using built-in JS libraries first.
:::
```js
// Below is an example of using a non-built-in JS class library.

// Get a single npm library: camelcase
$$.liveRequire("camelcase", (camelCase) => {
  camelCase("foo-bar"); // => 'fooBar'
});

//Get a multiple npm libraries: camelcase
$$.liveRequire(["camelcase", "md5"], (camelCase, md5) => {
  camelCase("foo-bar"); // => 'fooBar'
  md5("message"); // => '78e731027d8fd50ed642340b7c9a63b3'
});
```

### Built-in library list

- Encode and Decode
  - [atob](https://www.npmjs.com/package/atob)(v2.1.2): Base64 decode.
  - [btoa](https://www.npmjs.com/package/btoa)(v1.2.1): Base64 encode.
  - [crypto-js](https://www.npmjs.com/package/crypto-js)(v3.1.9-1): An Encoding / decoding library, including the common encoding and decoding methods (Base64, MD5, SHA, HMAC, AES, etc.).
    - You can only require the entire module, not a submodule of the class library. View the documentation here for more details.
  - [jsrsasign](https://www.npmjs.com/package/jsrsasign)(10.3.0): RSA encryption / decryption. Only Apidog version >= 1.4.5 is supported.
- Assertion
  - [chai](http://chaijs.com/) (v4.2.0): BDD / TDD assertion library.
- Tools
  - [postman-collection](http://www.postmanlabs.com/postman-collection/)(v3.4.0): Postman Collection library.
  - [cheerio](https://cheerio.js.org/)(v0.22.0): a subset of jQuery.
  - [lodash](https://lodash.com/) (v4.17.11): JS Utilities Library.
  - [moment](http://momentjs.com/docs/)(v2.22.2): Date libraries (not including locales).
  - [uuid](https://www.npmjs.com/package/uuid): generate UUID.
  - [xml2js](https://www.npmjs.com/package/xml2js)(v0.4.19): convert XML into JSON.
  - [csv-parse/lib/sync](https://csv.js.org/parse/api/sync/)( v1.2.4): parse CSV.
- JSONSchema Validators
  - [tv4](https://github.com/geraintluff/tv4)(v1.3.0):JSONSchema validator.
  - [ajv](https://www.npmjs.com/package/ajv)(v6.6.2):JSONSchema validator.
- Built-in NodeJS modules
  - [path](https://nodejs.org/api/path.html)
  - [assert](https://nodejs.org/api/assert.html)
  - [buffer](https://nodejs.org/api/buffer.html)
  - [util](https://nodejs.org/api/util.html)
  - [url](https://nodejs.org/api/url.html)
  - [punycode](https://nodejs.org/api/punycode.html)
  - [querystring](https://nodejs.org/api/querystring.html)
  - [string-decoder](https://nodejs.org/api/string_decoder.html)
  - [stream](https://nodejs.org/api/stream.html)
  - [timers](https://nodejs.org/api/timers.html)
  - [events](https://nodejs.org/api/events.html)

### Usage

Assign a variable to the corresponding module before using it.

```js
// SHA256
var cryptoJs = require("crypto-js");
console.log(cryptoJs.SHA256("Message"));

// base64
var atob = require("atob");
console.log(atob("Message"));
```

:::tip Please be aware that

You can only require the entire module when using a built-in library; you cannot require a library submodule.

```json
// A correct example.
var cryptoJs = require("crypto-js");
console.log(cryptoJs.SHA256("Message"));

// A wrong example.
var SHA256 = require("crypto-js/sha256");
console.log(SHA256("Message"));
```

:::
