---
id: database-operations
sidebar_position: 3
---

# Database Operations

PreProcessor and PostProcessor operations support database operations, including reading and writing data, using API to query results, assertions, customized script, etc.

We currently support MySQL, SQL Server, Oracle, PostgreSQL. More database types will be supported in the future.

## Example

1. Add a database operation in the predecessor operation tab.
2. SQL: SELECT \* FROM user LIMIT 2.
3. Extract the query into three variables: allUser,user,userName.

#### Example

If the SQL query result is as follows,

```js
[
  {
    id: 1,
    name: "jack",
  },
  {
    id: 2,
    name: "peter",
  },
];
```

the extracted value of the variables will be the following:

1.The value of, allUser (a temporary array variable) is:

```js
[
  {
    id: 1,
    name: "jack",
  },
  {
    id: 2,
    name: "peter",
  },
];
```

2.The value of user (an object variable) is:

```js
{
  "id": 1,
  "name": "jack",
}
```

3.The value of userName (a string variable) is:

```js
jack;
```

### Tips for Using Variables

When using variables, you can access the property value in the object or array type variable as {{{allUser[0].name}} or {{user.name}}. Please follow the JSON Path syntax specification and simply replace the \$ symbol in the JSON path with the variable name.

View details of how to use variables here.
