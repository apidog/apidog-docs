---
sidebar_position: 4
---

# How API signatures are handled

## Expected Outcome

1. Handle API signatures at once instead of manually configuring each API.

## How to achieve it

1. Create a public script that implements the signature logic, read the API request parameters, and then use a built-in library (for example, crypto-js) to generate the signature.
2. There are two ways to add the generated signature as a parameter.
   - Method 1: Add a signature parameter and modify request information directly via scripts (no need to use environment variables).
   - Method 2: Write the generated signature to an environment variable, and references the variable in the API parameters.
3. Reference the public script created above in the preprocessor script for the API.
4. If the signature algorithm is written in another language, you can use the fox.execute method to call a program written in another language.

## API Signature Example

### Signature Generation Rule

Step 1: Let’s set the parameters as set M. We arrange the non-empty parameter in set M based on ASCII code by ascending order, and use URL key value pair format (i.e. key1=value1&key2=value2...) to concat the non-empty parameter into stringA.  
Please be aware that:

1. Order the parameter name based on ASCII code by ascending order (dictionary order).
2. Empty parameter value will not be included in the signature.
3. Parameter names are case-sensitive.
4. The sign parameter will also not be included in the signature.

Step 2: Concat the key at the end of the stringA to get stringSignTemp, use MD5 algorithm on stringSignTemp, convert the resulting string to uppercase to get the signValue.

### Public Script Implementation

```javascript
// Get the key from the environment variable APPKEY
let key = pm.environment.get("APPKEY");

// Store all parameters needed for signature
let param = {};

// Add query parameters
let queryParams = pm.request.url.query;
queryParams.each(item => {
    if (item.value !== '') { // Only non-empty value will be included.
        param[item.key] = item.value;
    }
});

// Add body parameter
if (pm.request.body) {
    let formData;
    switch (pm.request.body.mode) {
        case 'formdata':
            formData = pm.request.body.formdata;
            break;
        case 'urlencoded':
            formData = pm.request.body.urlencoded;
            break;
        case 'raw':
             // If there is no JSON-formatted request body, or if the JSON-formatted body is not included in the signature, remove the code block.
            let contentType = pm.request.headers.get('content-type');
            if (
                contentType
                && pm.request.body.raw
                && contentType.toLowerCase().indexOf('application/json') !== -1
            ) {
                try {
                    let jsonData = JSON.parse(pm.request.body.raw);
                  	/*
                    * If the API parameter extracted from the script includes variables, the variables will not automatically be replaced by its value. In order to get its value, use `pm.variables.replaceIn`.
                    * let body = pm.variables.replaceIn(pm.request.body.raw);
                    * let jsonData = JSON.parse(body);
                  	*/
                    for (let key in jsonData) {
                        let value = `${jsonData[key]}`; // Note that if the actual value is not string  type, you will need to modify the code block accordingly.
                        if (value !== '') { // Only non-empty parameter values will be included.
                            param[key] = value;
                        }
                    }
                } catch (e) {
                    console.log('request body is not in JSON format')
                }
            }
            break;
        default:
            break;
    }
    if (formData) {
        formData.each(item => {
            if (item.value !== '') { // Only non-empty parameter values will be included.
                param[item.key] = item.value;
            }
        });
    }
}
// Get the key.
let keys = [];
for (let key in param) {
   // Note that we need to remove the sign parameter.
    if (key !== 'sign') {
        keys.push(key);
    }
}

// Sort the parameter name based on ASCII code by ascending order (dictionary order).
keys.sort();

// Convert to key-value pairs.
let paramPair = [];
for (let i = 0, len = keys.length; i &lt; len; i++) {
    let k = keys[i];
    paramPair.push(k + '=' + encodeURIComponent(param[k])) // urlencode coding
}

// Add key.
paramPair.push("key=" + key);

// Concatenation.
let stringSignTemp = paramPair.join('&');
// console.log(stringSignTemp);

let sign = CryptoJS.MD5(stringSignTemp).toString().toUpperCase();
// console.log(sign);

// Method 1: Add a signature parameter and modify request information directly via scripts (no need to use environment variables).
// View more in documentation. [https://apidog.com/help/app/scripts/examples/request-handle/](https://apidog.com/help/app/scripts/examples/request-handle/)
queryParams.upsert({
    key: 'sign',
    value: sign,
});

// Method 2: Write it into an environment variable. You will need to reference the environment variables in API parameters.
// pm.environment.set("SIGN", sign);


```

## Translation API Signature Example

### Signature Generation Rule

Step 1: Concat the appid, test to be translated q (UTF-8 encoding), random number salt, and the platform assigned key (available in the management console) into string 1 based on the order of appid + q + salt + key.

Step 2: Use md5 algorithm on string 1 to get the 32-bit lowercase sign.

Please be aware that:

1. Text to be translated (q) needs to be in UTF-8 encoding.
2. When concating appid+q+salt+key into signature, do not apply URL encode on q. When the signature is generated, apply URL encode on q before sending out the HTTP request.

```js
Example - Translate apple from English to Chinese
Request parameters:
q=apple
from=en
to=zh
appid=2015063000000001
salt=1435660288
Platform assigned key: 12345678
Generate sign：
>Concat string 1.
Concat appid=2015063000000001+q=apple+salt=1435660288+key=12345678
into string 1 =2015063000000001apple143566028812345678
> Generate the signature sign. Use the md5 algorithm on string 1 to get the 32-bit lowercase sign. Before using the md5 algorithm, string 1 needs to be in UTF-8 encoding.
sign=md5(2015063000000001apple143566028812345678)
sign=f89f9594663708c1605f3d736d01d2d4
The complete request is going to be:
http://xxx/api/trans/vip/translate?q=apple&from=en&to=zh&appid=2015063000000001&salt=1435660288&sign=f89f9594663708c1605f3d736d01d2d4

```

### Public Script Implementation

```js
// Get query params
var queryParams = pm.request.url.query;

// Get q from query params.
var q = queryParams.get("q");

// Get the value of environment variables APPID and SECRET_KEY
var appid = pm.environment.get("APPID");
var secretKey = pm.environment.get("SECRET_KEY");

// Generate a random number between 32768 and 65536.
var salt = parseInt(Math.random() * 32769 + 32768, 10);

// Convert the random number into a string.
salt = salt.toString();
console.log(salt);

// Concat a string using appid+q+salt=secretKey
var str = appid + q + salt + secretKey;
console.log(str);

// Use md5 algorithm on the string to generate sign
var sign = CryptoJS.MD5(str).toString();

// Method 1: Add salt and sign in the query parameters for the API (no need to use environment variables).
// View documentation here: https://apidog.com/help/app/scripts/examples/request-handle/
queryParams.upsert({
  key: "salt",
  value: salt,
});
queryParams.upsert({
  key: "sign",
  value: sign,
});

// Method 2: Write salt and sign in global variables. You will need to reference the global variables in API parameters.
// pm.environment.set("SALT", salt);
// pm.environment.set("SIGN", strmd5);
```
