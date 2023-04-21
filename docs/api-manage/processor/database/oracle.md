---
sidebar_position: 1
title: Oracle Client 
---

# Install Oracle Client


To connect to an Oracle database, you need to install [Oracle Instant Client](https://www.oracle.com/database/technologies/instant-client.html) first, click here to download [https://www.oracle.com/database/technologies/instant-client/downloads.html](https://www.oracle.com/database/technologies/instant-client/downloads.html)



## Instruction

### Windows

1. Download the Instant Client ZIP file for Windows, e.g., `instantclient-basic-windows.x64-19.10.0.0.0dbru.zip`.
2. Unpacking the ZIP file to the specified directory, e.g., `C:\oracle\instantclient_19_3`.
3. Add the specified directory to the environment variable `PATH.`
4. Restart Apidog.
5. [More information](https://www.oracle.com/database/technologies/instant-client/downloads.html).


### macOS

1. Download the Instant Client ZIP file for macOS, e.g., `instantclient-basic-macos.x64-19.8.0.0.0dbru.zip`.
2. Unpacking the ZIP file to the specified directory, e.g., `~/oracle/instantclient_19_8/`.
3. Run the following command to link the `libclntsh.dylib` file in the directory specified above to `/usr/local/lib` :
   
   ```ln -s ~/oracle/instantclient_19_8/libclntsh.dylib /usr/local/lib```
4. Restart Apidog。
5. [More information](https://www.oracle.com/database/technologies/instant-client/downloads.html).



### Linux

Learn more about at: [https://www.oracle.com/database/technologies/instant-client/downloads.html](https://www.oracle.com/database/technologies/instant-client/downloads.html)