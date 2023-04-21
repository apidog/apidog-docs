---
sidebar_position: 1
---

# Assertion

Postprocessor script is a code snippet that is executed after the request has been sent. It is mainly used to assert whether the result returned by the request is correct or not, write the result data returned by the request to environment variables, etc.

## Examples

#### Assert whether the result returned by the request is correct:

```js
// pm.response.to.have Example
pm.test("Return status code 200", function() {
  pm.response.to.have.status(200);
});

// pm.expect() Example
pm.test("The current environment is the production environment", function() {
  pm.expect(pm.environment.get("env")).to.equal("production");
});

// response assertions Example
pm.test("No error in return result", function() {
  pm.response.to.not.be.error;
  pm.response.to.have.jsonBody("");
  pm.response.to.not.have.jsonBody("error");
});

// pm.response.to.be* Example
pm.test("No error in return result", function() {
  // assert that the status code is 200
  pm.response.to.be.ok; // info, success, redirection, clientError,  serverError, are other variants
  // assert that the response has a valid JSON body
  pm.response.to.be.withBody;
  pm.response.to.be.json; // this assertion also checks if a body  exists, so the above check is not needed
});
```

#### Write the returned data to environment variables:

```js
// Get return data in JSON format
var jsonData = pm.response.json();

// Write the value of  jsonData.token into an environment variable
pm.environment.set("token", jsonData.token);
```

### Check whether the response body includes a given string.

```js
pm.test("Body matches string", function() {
  pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});
```

### Check whether the response body is a given string.

```js
pm.test("Body is correct", function() {
  pm.response.to.have.body("response_body_string");
});
```

### Check the json output value.

```js
pm.test("Your test name", function() {
  var jsonData = pm.response.json();
  pm.expect(jsonData.value).to.eql(100);
});
```

### Check whether the header is set as Content-Type

```js
pm.test("Content-Type header is present", function() {
  pm.response.to.have.header("Content-Type");
});
```

### Check whether the request response time is less than 200 milliseconds

```js
pm.test("Response time is less than 200ms", function() {
  pm.expect(pm.response.responseTime).to.be.below(200);
});
```

### Check whether the HTTP status code is 200

```js
pm.test("Status code is 200", function() {
  pm.response.to.have.status(200);
});
```

### Check whether the HTTP status code name contains a string

```js
pm.test("Status code name has string", function() {
  pm.response.to.have.status("Created");
});
```

### Check whether the POST request status code is correct.

```js
pm.test("Successful POST request", function() {
  pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});
```

## How to Use the Assertion Libraries

Apidog has built-in ChaiJS as an assertion library. Below is an example of commonly used assertion test scripts. View the documentation, ChaiJS expect BDD library, for more examples.

### Assert that the target string contains another string

```js
pm.test("Assert that the target string contains another string", function() {
  pm.expect("foobar").to.have.string("bar");
});
```

### Assert that the target is strictly equal to (===) a value

```js
const TEN = 10;
pm.test("Check whether number is equal to 10", function() {
  pm.expect(TEN).to.equal(10);
});
```

If the deep flag is on, the assert target is the value.

```js
pm.test("The assert target is the value", function() {
  pm.expect(data1).to.deep.equal(data2);
});
```

When you turn on the deep flag to use equal and property assertions, the flag will allow subsequent assertions to compare key-value pairs of objects recursively instead of comparing the objects themselves.

### Assert that the depth is equal to a value, equivalent to deep.equal(value)

```js
pm.test("Check response value", function() {
  var jsonData = pm.response.json();
  pm.expect(jsonData.value).to.eql(100);
});
```

### Assert the current environment

```js
pm.test("Check whether environment is production", function() {
  pm.expect(pm.environment.get("env")).to.equal("production");
});
```

### Assert a data structure

```js
pm.test("Check whether target is string", function() {
  pm.expect("Postman").to.be.a("string");
});
pm.test("Check whether target is an object", function() {
  pm.expect({ a: 1 }).to.be.an("object");
});
pm.test("Check whether target is undefined", function() {
  pm.expect(undefined).to.be.an("undefined");
});
```

Please be aware that:

1. We recommend to use the .a method to check the data type of the template before making other assertions.
2. Data types are case-sensitive.

### Check if an array is empty

```js
pm.test("Check whether array is empty", function() {
  pm.expect([]).to.be.empty;
});
pm.test("Check whether string is empty", function() {
  pm.expect("").to.be.empty;
});
```

### Check if an array is empty after using .a method

```js
pm.test("Check whether array is empty", function() {
  pm.expect([]).to.be.an("array").that.is.empty;
});
```

### Assert the key value of the target object

```js
pm.test("Check whether object contains all provided keys", function() {
  pm.expect({ a: 1, b: 2 }).to.have.all.keys("a", "b");
});
pm.test("Checking if object contains any ONE of the keys", function() {
  pm.expect({ a: 1, b: 2 }).to.have.any.keys("a", "b");
});
pm.test(
  "Check whether object contains any NONE of the provided keys",
  function() {
    pm.expect({ a: 1, b: 2 }).to.not.have.any.keys("c", "d");
  }
);
```

### Assert whether the target object contains the specified attribute

```js
pm.test("Check whether object contains the property", function() {
  pm.expect({ a: 1 }).to.have.property("a");
});
```

Please be aware that:

1. The target object must be an object, set, array, or map.
2. If .keys is not preceded by .all or .any, it defaults to .all.
3. Since only some data types of the target object can be used with the .keys method, we recommend asserting the data type with the .a method first.

```js
pm.test("Check whether object contains all the keys", function() {
  pm.expect({ a: 1, b: 2 })
    .to.be.an("object")
    .that.has.all.keys("a", "b");
});
```

### Assert the length of the target object

```js
pm.test("Check the length of the target", function() {
  pm.expect("foo").to.have.lengthOf(3);
});
pm.test("Check the size of the target", function() {
  pm.expect([1, 2, 3]).to.have.lengthOf(2);
});
```

### Assert the members of the target object (members)

```js
pm.test(
  "Check whether the target has same members as the array set",
  function() {
    pm.expect([1, 2, 3]).to.have.members([2, 1, 3]);
  }
);
```

Please be aware that:

1. By default, .members uses a strict comparison.
2. The order of the members does not affect the result.

### Asserts that the target object contains the specified item

```js
pm.test(
  "Check whether the target array includes the number provided",
  function() {
    pm.expect([1, 2, 3]).to.include(2);
  }
);
pm.test(
  "Check whether the target object includes the properties provided",
  function() {
    pm.expect({ a: 1, b: 2, c: 3 }).to.include({ a: 1, b: 2 });
  }
);
```

We recommend using .a method to determine the data type before using .include.

Example:

```js
pm.test(
  "Check whether the target is an array that includes the number specified",
  function() {
    pm.expect([1, 2, 3])
      .to.be.an("array")
      .that.includes(2);
  }
);
```
