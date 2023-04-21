---
sidebar_position: 1
---

# Apidog Swagger Extension

1. Specify the API directory: `x-apidog-folder`

- Use`/`to separate directories.`\`and`/`are special characters that need to be escaped. Use`\/`for character `/`, and use`\\`for character `\`.

```js
"paths": {
  "/pets": {
     "post": {
         ...
         "operationId": "addPet",
         "x-apidog-folder": "pet_store/pet_info"
     }
  }
}
```

- Swagger Example:

```js
@Operation(extensions = {
    @Extension(properties = {
            @ExtensionProperty(name = "apidog-folder", value = "pet_store/pet_info")})
})
public Response createPet() {...}
```

2. API status:`x-apidog-status`

<table>
  <tr>
   <td><strong>Status</strong>
   </td>
  </tr>
  <tr>
   <td>designing
   </td>
  </tr>
  <tr>
   <td>pending
   </td>
  </tr>
  <tr>
   <td>developing
   </td>
  </tr>
  <tr>
   <td>integrating
   </td>
  </tr>
  <tr>
   <td>testing
   </td>
  </tr>
  <tr>
   <td>tested
   </td>
  </tr>
  <tr>
   <td>released
   </td>
  </tr>
  <tr>
   <td>deprecated
   </td>
  </tr>
  <tr>
   <td>exception
   </td>
  </tr>
</table>

```js
"paths": {
    "/pets": {
        "post": {
            ...
            "operationId": "addPet",
            "x-apidog-status": "released"
        }
    }
}
```

Swagger Exmple:

```js
@Operation(extensions = {
    @Extension(properties = {
            @ExtensionProperty(name = "apidog-status", value = "released")})
})
public Response createPet() {...}
```
