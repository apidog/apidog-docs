---
sidebar_position: 3
---

# Postprocessor Scripts

Postprocessor script is a code snippet that is executed after the request has been sent. It is mainly used to assert whether the result returned by the request is correct or not, write the result data returned by the request to environment variables, etc.

## Examples

#### Assert whether the result returned by the request is correct

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

#### Write the returned data to environment variables

```js
// Get return data in JSON format
var jsonData = pm.response.json();

// Write the value of  jsonData.token into an environment variable
pm.environment.set("token", jsonData.token);
```

## More Examples

1. View examples of test/assertion here.
2. View examples of using different variables, including environment variables, and global variables, temporary variables here.
3. View examples of sending API requests with scripts.
4. View examples of reading API request information here.
5. View examples of encrypt/decrypt here.
