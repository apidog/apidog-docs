---
sidebar_position: 4
---

# XPath Intro

You can use XPath to select nodes or sets of nodes in an XML document. Nodes are selected by following a path or steps.

## XML Example

We will use this XML document in the following example.

```js
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book>
    <title lang="eng">Harry Potter&</title>
    <price>29.99</price>
  </book>
  <book>
    <title lang="eng">Learning XML</title>
    <price>39.95</price>
  </book>
</bookstore>
```

## Node Selection

You can use XPath to select nodes or sets of nodes in an XML document. Nodes are selected by following a path or steps.

Below are some of the most common path expressions.

<table>
  <tr>
   <td><strong>Expression</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>nodename
   </td>
   <td>Select all the children of this node
   </td>
  </tr>
  <tr>
   <td>/
   </td>
   <td>Select from the root node. 
   </td>
  </tr>
  <tr>
   <td>//
   </td>
   <td>Select nodes in the document from the current node that matches the selection, regardless of their positions 
   </td>
  </tr>
  <tr>
   <td>.
   </td>
   <td>Select the current node
   </td>
  </tr>
  <tr>
   <td>..
   </td>
   <td>Select the parent node of the current node
   </td>
  </tr>
  <tr>
   <td>@
   </td>
   <td>Select an attribute
   </td>
  </tr>
</table>

In the following table, we have listed some path expressions and the results of the expressions.

<table>
  <tr>
   <td><strong>Path Expression</strong>
   </td>
   <td><strong>Result</strong>
   </td>
  </tr>
  <tr>
   <td>bookstore
   </td>
   <td>Select all children of the bookstore element
   </td>
  </tr>
  <tr>
   <td>/bookstore
   </td>
   <td>Select the root element bookstore. If the path starts with a forward slash ( / ), then this path always represents an absolute path to an element
   </td>
  </tr>
  <tr>
   <td>bookstore/book
   </td>
   <td>Select all book elements that are children of the bookstore
   </td>
  </tr>
  <tr>
   <td>//book
   </td>
   <td>Select all book elements regardless of their position in the document
   </td>
  </tr>
  <tr>
   <td>bookstore//book
   </td>
   <td>Select all book elements that are children of bookstore elements, regardless of where they are located under the bookstore
   </td>
  </tr>
  <tr>
   <td>//@lang
   </td>
   <td>Select all attributes named lang
   </td>
  </tr>
</table>

## Predicates

You can use predicates to find a specific node or a node containing a specified value.

The predicate is enclosed in square brackets.

In the following table, we have listed some path expressions with predicates and the results of the expressions.

<table>
  <tr>
   <td><strong>Path Expression</strong>
   </td>
   <td><strong>Result</strong>
   </td>
  </tr>
  <tr>
   <td>/bookstore/book[1]
   </td>
   <td>Select the first book element of the bookstore child elements
   </td>
  </tr>
  <tr>
   <td>/bookstore/book[last()]
   </td>
   <td>Select the last book element of the bookstore child elements
   </td>
  </tr>
  <tr>
   <td>/bookstore/book[last()-1]
   </td>
   <td>Select the second to the last book element of the bookstore child elements
   </td>
  </tr>
  <tr>
   <td>/bookstore/book[position()]
   </td>
   <td>Select the first two book elements of the bookstore child elements
   </td>
  </tr>
  <tr>
   <td>//title[@lang]
   </td>
   <td>Select all title elements that have an attribute named lang
   </td>
  </tr>
  <tr>
   <td>//title[@lang='eng']
   </td>
   <td>Select all title elements that have a lang attribute with the value eng
   </td>
  </tr>
  <tr>
   <td>/bookstore/book[price>35.00]
   </td>
   <td>Select all book elements of the bookstore with the value of the price element greater than 35.00
   </td>
  </tr>
  <tr>
   <td>/bookstore/book[price>35.00]//title
   </td>
   <td>Select all the title elements of the book element in the bookstore with the price element greater than 35.00
   </td>
  </tr>
</table>

## Selecting Unknown Nodes

The XPath wildcard can be used to select unknown XML elements.

<table>
  <tr>
   <td><strong>Wildcard</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>*
   </td>
   <td>Match any element node
   </td>
  </tr>
  <tr>
   <td>@*
   </td>
   <td>Match any attribute node
   </td>
  </tr>
  <tr>
   <td>node()
   </td>
   <td>Match any type of node
   </td>
  </tr>
</table>

In the following table, we have listed some path expressions and the results of these expressions.

<table>
  <tr>
   <td><strong>Path Expression</strong>
   </td>
   <td><strong>Result</strong>
   </td>
  </tr>
  <tr>
   <td>/bookstore/*
   </td>
   <td>Select all child elements of the bookstore element
   </td>
  </tr>
  <tr>
   <td>//*
   </td>
   <td>Select all elements in the document
   </td>
  </tr>
  <tr>
   <td>//title[@*]
   </td>
   <td>Select all title elements with attributes
   </td>
  </tr>
</table>

## Select a Number of Paths

You can select several paths by using the "|" operator in a path expression.

In the following table, we have listed some path expressions and the results of these expressions.

<table>
  <tr>
   <td><strong>Path Expression</strong>
   </td>
   <td><strong>Result</strong>
   </td>
  </tr>
  <tr>
   <td>//book/title | //book/price
   </td>
   <td>Selects all title and price elements of the book element.
   </td>
  </tr>
  <tr>
   <td>//title | //price
   </td>
   <td>Select all title and price elements in the document
   </td>
  </tr>
  <tr>
   <td>/bookstore/book/title | //price
   </td>
   <td>Select all the title elements of the book element of the bookstore element and all the price elements in the document
   </td>
  </tr>
</table>
