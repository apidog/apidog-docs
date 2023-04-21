---
sidebar_position: 7
---

# Environment Variables/Global Variables/Temporary Variables

Variables are used to store information to be referenced in different places. Different API (request parameters, scripts, etc.) can refer to the same variable, and updating the value of the variable updates all the corresponding values that refer to that variable. Using variables can improve productivity.

## Quick Start

1. Open Environment Management (the Settings button in the upper right corner of the app) and select the Global Variables tab.
2. Add a variable named my_variable, set the local value to hello, and click Save.
3. Go to an API, and enter {{my_variable}} in the parameter value in the run tab.
4. Click the run button, and send the request. The system will replace {{my_variable}} with hello during runtime and send out the request.

:::tip Please be aware that:

- The system has a built-in special environment variable named BASE_URL, whose value is the base URL of the current environment. It can be accessed by {{BASE_URL}}.
- If you manually add an environment variable named BASE_URL, it will override the value of the system built-in BASE_URL.
- You can access the base URL through script by pm.environment.get('BASE_URL').
- The script cannot modify the base URL. The script pm.environment.set('BASE_URL','xxx') generates a real environment variable named BASE_URL, without modifying the base URL.

:::

## The Difference between Local and Remote Values

1. All variables read and write local values instead of remote values at runtime.
2. Local values are appropriate for sensitive data such as tokens, accounts, passwords, etc. since they are only saved locally and are not synced with the cloud or between team members.
3. Remote values are synced to the cloud, mainly used to share data values between team members.

:::tip Please be aware that:

Since the local values are only stored locally, using cleaning software to clean the Apidog file cache will cause the local values to be deleted. So please be cautious.

:::

## Variables Type

1. Environment Variables: Environment variables are the variables that change when the environment changes. Environment variables are managed in the environment management sections. View documentation of environment management here.
2. Global Variables: Global variables are similar to environmental variables. The only difference is that global variables do not change when the environment changes.
3. Temporary Variables: temporary variables are only valid during a single API run, a test case debug, or a test collection debug. They will be discarded afterward.

## Using Variables

1. All variables can be accessed through double curly brackets, for example, {{token}}.
2. Variables can be used in multiple places, including API running tab, API use case, and quick request.
3. You can use variables for the additional variables in the environment as well.

:::tip Tips!

You can use variables and dynamic variables for the request body in json or raw format. See usage below

```json
{
 "field1": "{{stringVariable}}",
 "field2": {{intVariable}},
 "field3": {{arrayVariable}},
 "field4": {{objectVariable}},
 "field5": {{$timestamp}}
}
```

Please be aware that:

1. You need to add double quotes when using variables for string type in json format. Do not add double quotes for all other types, as shown in the example above.
2. If you use a variable without double quotes, please do not use the formatting feature. Ignore any prompts for incorrect JSON formatting if there are any.

:::

If the value of the variable is in the form of an object or an array, the value of the attribute in the variable can be read by {{variableName.attributeName}} or {{variableName[0].attributeName}}. For example:

1. The object variable user is as follows:

```js
{
  "id": 1,
  "name": "jack"
}
```

- You can reference the name property of the user object as {{user.name}} in the API parameter.
- You can reference the name property in the user object as pm.variables.get("user.name") in customized scripts.

2. The array variable user is as follows:

```js
[
  {
    id: 1,
    name: "jack",
  },
];
```

- You can reference the name property of the first element in the user array as {{user[0].name}} in the API parameter.
- You can reference the name property in the first element of the user array as pm.variables.get("user[0].name") in customized scripts.

As shown above, reading the value of a property in a variable (object or array) as {{user.name}} follows the JSON path syntax specification. You can replace the \$ symbol in the JSON path with the variable name.

View details of JSON path here.

## Variable Precedence

Double curly brackets can reference all variables. When different types of variables with the same name exist, the system decides which to use based on precedence.

Variable Precedence Order: Temporary Variables > Debugging Variables > Environment Variables > Global Variables

## Using Variables in Script

### Environment Variables

```js
//Set up Environment Variables
pm.environment.set("variable_key", "variable_value");

//Access Environment Variables
var variable_key = pm.environment.get("variable_key");

//Unset Environment Variables
pm.environment.unset("variable_key");
```

#### Write object or array (non-string type) into environment variable

Environment variables need to be in string type. If you want to write an object or array type, you need to use JSON.stringfy to convert it into a string.

```js
var array = [1, 2, 3, 4];
pm.environment.set("array", JSON.stringify(array));

var obj = { a: [1, 2, 3, 4], b: { c: "val" } };
pm.environment.set("obj", JSON.stringify(obj));
```

When reading the value, you need to use JSON.parse to convert it back.

```js
try {
  var array = JSON.parse(pm.environment.get("array"));
  var obj = JSON.parse(pm.environment.get("obj"));
} catch (e) {
  // Exception handling
}
```

### Global Variables

```js
// Set up global variables
pm.globals.set("variable_key", "variable_value");

// Access Global Variables
var variable_key = pm.globals.get("variable_key");

// unset Global Variables
pm.globals.unset("variable_key");
```

### Temporary Variables

```js
// Set up Temporary Variables
pm.variables.set("variable_key", "variable_value");

// Access Temporary Variables
var variable_key = pm.variables.get("variable_key");

// unset Temporary Variables
pm.variables.unset("variable_key");
```
