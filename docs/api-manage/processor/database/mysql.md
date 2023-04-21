---
sidebar_position: 2
title: MySQL FAQ 
---

# MySQL FAQ

Currently, the latest mysql modules do not fully support the `caching_sha2_password` encryption method of MySQL8, where `caching_sha2_password` is the default encryption method.

Please use the method that requires you to specify the `mysql_native_password` mode to change the MySQL account password, use another tool to connect to MySQL, and then run the following SQL to change the password of the corresponding account.

```sql
ALTER USER 'username'@'%' IDENTIFIED WITH mysql_native_password BY '123456'
```

Note: Please change `username` above to the `username` you need to set and `123456` to the `password` you need to set.

