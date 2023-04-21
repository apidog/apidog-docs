# Other Examples

## Send API request

```js
pm.sendRequest("https://www.api.com/get", function(err, response) {
  console.log(response.json());
});
```

View more details for [pm.sendRequest](https://apidog.com/help/app/scripts/api-references/pm-reference/#pm-sendrequest) here.

## Encode/Decode

### Decode base64 data

```js
var cryptoJs = require("crypto-js");

//  base64Content is a value that has been encoded with base64.
var rawContent = base64Content.slice(
  "data:application/octet-stream;base64,".length
);

// CryptoJS is an object that is embedded in the scripting engine.
// You can use it directly. View documentation here: https://www.npmjs.com/package/crypto-js
var intermediate = cryptoJs.enc.Base64.parse(base64content);
pm.test("Contents are valid", function() {
  pm.expect(cryptoJs.enc.Utf8.stringify(intermediate)).to.be.true; // a check for non-emptiness
});
```

You can use the built-in JS library to implement encryption and decryption algorithms.

### Convert XML to JSON

```js
var jsonObject = xml2Json(responseBody);
```
