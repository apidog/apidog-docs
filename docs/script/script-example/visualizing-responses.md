---
sidebar_position: 4
---

# Visualizing Responses

The Apidog Visualizer provides a programmable way to visually represent your request responses. Visualization code added to the Tests for a request will render in the Visualize tab for the response body, alongside the Pretty, Raw, and Preview options.

## pm.visualizer.set()

To visualize your response data, add code to the Pre-request or Tests script for the request. The pm.visualizer.set() method will apply your visualizer code to the data and present it in the Visualize tab when the request runs.

## How to Ues

### `pm.visualizer.set()` method

This method accepts 3 parameters.

1. `template` is a required parameter, The first parameter is the HTML template string received by [Handlebars](https://handlebarsjs.com/) , which will eventually be rendered under `<body>`.You can write `<link>` in `template` to load external css stylesheets, or use `<script>` to load third-party libraries.

2. Select the parameter `data` to receive an object that is used to replace the template string variable of [Handlebars](https://handlebarsjs.com/) 
      ```JavaScript
      const template = `<div>{{name}}</div>`;
      pm.visualizer.set(template, {
          name: 'Apidog'
      })
      // The rendered result is <div>Apidog</div>
      ```

3. The parameter `options` is optional, which is the same as the options parameter received by the `options` method. It is used to configure how Handlebars compiles the template string passed in the first parameter.


### pm.getData(cb: (err, data) => void)

The parameter received by this method is a function that allows you to get the data of the second parameter you passed in the template string passed in `pm.visualizer.set()`.

1. `error` error message

2. The data passed in by `data` through the second parameter `pm.visualizer.set()`

```JavaScript
const template = `
    <div>{{name}}</div>
    <script>
        pm.getData(function(err, data){
            // Do the corresponding operation according to the incoming data in the callback function
            console.log(data.name)
            // Apidog
        })
    </script>
`
pm.visualizer.set(template, {
    name: 'Apidog'
})
```

⚠️ Be careful! You cannot call `Worker` and `indexedDB` in the `window` object in the template string

## Example

### Base64 Image Postprocessor Scripts

```javascript
// Return data from the interface and encapsulate it into the structure you need.
var resp = {
    response: pm.response.json()
}
// Html template character
var template = `<html><img src="{{response.data}}" /></html>`;

// Set up visualizer data. Pass templates and parse objects.
pm.visualizer.set(template, resp);
```