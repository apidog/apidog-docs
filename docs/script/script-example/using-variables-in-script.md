---
sidebar_position: 2
---

# Using Variables in Scripts

## Environment Variables

```js
// Set an environment variable.
pm.environment.set("variable_key", "variable_value");

// Get an environment variable.
var variable_key = pm.environment.get("variable_key");

// Unset an environment variable.
pm.environment.unset("variable_key");
```

### Write an object or an array into an environment variable

Environment variables only take strings. You need to use JSON.stringfy to convert an object or an array into a string.

```js
var array = [1, 2, 3, 4];
pm.environment.set("array", JSON.stringify(array));

var obj = { a: [1, 2, 3, 4], b: { c: "val" } };
pm.environment.set("obj", JSON.stringify(obj));
```

You need to use JSON.parse to convert it back when reading it.

```js
try {
  var array = JSON.parse(pm.environment.get("array"));
  var obj = JSON.parse(pm.environment.get("obj"));
} catch (e) {
  // handle an exception
}
```

## Global Variables

```js
// Set a global variable
pm.globals.set("variable_key", "variable_value");

// Get a global variable
var variable_key = pm.globals.get("variable_key");

// Unset a global variable
pm.globals.unset("variable_key");
```

## Temporary Variables

```js
// Set a temporary variable.
pm.variables.set("variable_key", "variable_value");

// Get a temporary variable.
var variable_key = pm.variables.get("variable_key");

// Unset a temporary variable.
pm.variables.unset("variable_key");
```
