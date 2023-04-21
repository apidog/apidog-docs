---
sidebar_position: 3
---

# Using Scripts to Read/Modify Request Messages

You can use pm.request to read/modify request messages.

:::tip Please be aware that:

- You can use scripts to get all request parameters, but you can only use scripts to modify header and query parameters.
- Modifying header and query parameters are only valid in preprocessor scripts, not in postprocessor scripts.
- Using scripts to get API parameters: if the parameter contains a variable, it will not be replaced with the corresponding value. You need to use the pm.variables.replaceIn to get the actual value.

```json
// pm.variables.replaceIn: handling variables in parameters
var body = pm.variables.replaceIn(pm.request.body.raw);
var jsonData = JSON.parse(body);
```

:::

## URL Related Information

```js
// Get an url object.
var urlObj = pm.request.url;

// Get the full url of the API request
var url = urlObj.toString();

// Get protocols (http or https).
var protocol = urlObj.protocol;

// Get the port.
var port = urlObj.port;
```

## Header Parameters

Get header parameters

```js
// Get header parameters.
var headers = pm.request.headers;

// Get the value of the field1 key from the header.
var field1 = headers.get("field1");

// Get all header parameters as key-value objects.
var headersObject = headers.toObject();

// Iterate over the entire header.
headers.each((item) => {
  console.log(item.key); // log the item key
  console.log(item.value); // log the item value
});
```

Modifying Header Parameters

```js
// Get header parameters.
var headers = pm.request.headers;

// Add a header parameter.
headers.add({
  key: "field1",
  value: "value1",
});

// Modify a header parameter (add a header parameter if it does not exist).
headers.upsert({
  key: "field2",
  value: "value2",
});
```

## Query Parameters

Get query parameters

```js
// Get query parameters.
var queryParams = pm.request.url.query;

//  Get the value of the field1 key from the header.
var field1 = queryParams.get("field1");

// Get all header parameters as key-value objects.
var quertParamsObject = queryParams.toObject();

// Iterate over the entire header.
queryParams.each((item) => {
  console.log(item.key); // log the item key
  console.log(item.value); // log the item value
});
```

Modifying Query Parameters

```js
// Get a query parameter.
var queryParams = pm.request.url.query;

// Add a query parameter.
queryParams.add({
  key: "field1",
  value: "value1",
});

// Modify a query parameter (add a query parameter if it does not exist).
queryParams.upsert({
  key: "field2",
  value: "value2",
});
```

## Body Parameters

Body parameters come from pm.request.body. pm.request.body is a RequestBody instance.

View more details at http://www.postmanlabs.com/postman-collection/RequestBody.html.

:::tip Please be aware that

- We recommend referencing variables in the Body to modify body data. You can modify the value of the corresponding variable in preprocessor scripts.
- We support direct modification of body parameters in Apidog version 1.4.16 or higher. See example of how to use it below:

```json
var body = pm.request.body.toJSON();
console.log("body object", body);

var bodyStr = body.raw;
console.log("body string", bodyStr);

var bodyJSON = JSON.parse(bodyStr);
bodyJSON.id = 100;
pm.request.body.update(JSON.stringify(bodyJSON, null, 2));
console.log("Modified body", pm.request.body.toJSON());
```

:::

### 1. Body type is form-data.

Get form-data info.

```js
// When body is form-data, use pm.request.body.formdata to get request parameters.
var formData = pm.request.body.formdata;

// Get the value of the field1 key from the header.
var field1 = formData.get("field1");
console.log(field1); // log field 1

// Get all header parameters as key-value objects.
var formdataObject = formData.toObject();
console.log(formdataObject); // log formdataObject

// Iterate over form-data.
formData.each((item) => {
  console.log(item.key); //  log the item key
  console.log(item.value); // log the item value
});
```

### 2. Body type is x-www-form-urlencode.

Get x-www-form-urlencode info.

```js
// When body is x-www-form-urlencode, use pm.request.body.urlencoded to get request parameters.
var formData = pm.request.body.urlencoded;

// Get the value of the field1 key from the header.
var field1 = formData.get("field1");

// Get all header parameters as key-value objects.
var formdataObject = formData.toObject();

// Iterate over form-data.
formData.each((item) => {
  console.log(item.key); //  log the item key
  console.log(item.value); // log the item value
});
```

### 3. Body type is JSON.

Get JSON info.

```js
// When body type is json, use pm.request.body.raw to get request parameters.
try {
  var jsonData = JSON.parse(pm.request.body.raw);
  console.log(jsonData); // log JSON data.
} catch (e) {
  console.log(e);
}
```

### 4. Body type is raw.

Get raw info.

```js
// When body type is raw, use pm.request.body.raw to get request parameters.

var raw = pm.request.body.raw;
console.log(raw); // log raw data.
```
