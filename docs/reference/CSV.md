---
sidebar_position: 6
---

# CSV File Format

The following format specification is defined in `RFC 4180`.

1.Each record in the file must be on a different line, separated by a line feed `CRLF`. For example: 

```js
 aaa,bbb,ccc
 zzz,yyy,xxx
```

2. The end of the last record does not include a line break. For example: 
```js
 aaa,bbb,ccc
 zzz,yyy,xxx
```

3. The first record in the file may be a field name (not required). If it does contain field names, the number of names and the storage rules must be consistent with the other records. 

```js
field_name,field_name,field_name
aaa,bbb,ccc
zzz,yyy,xxx
```

4. Each record can contain one or more fields, each separated by a semi-colon comma. All records in the file must have the same number of fields. Spaces in fields are field values and should not be ignored. The last field of each record should not be followed by a semi-colon comma. For example: 

```js
aaa,bbb,ccc
```

5. Each field can be enclosed in half-quotes (not always necessary). If the field is not enclosed in double quotes, double quotes should not appear in the fields. For example: 

```js
"aaa","bbb","ccc"
zzz,yyy,xxx
```


6. Fields containing line breaks, half-quotes, or half-commas should be enclosed in half-quotes. For example:

```js
"aaa","b
bb","ccc"
zzz,yyy,xxx
```

7. If a field is enclosed in half-quotes, you need to add a half-quote in front of the field to indicate that it contains half-quotes itself. For example: 

```js
"aaa","b""bb","ccc"
```
