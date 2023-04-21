---
sidebar_position: 2
---




### 1.  Is Apidog free?

The open source version of Apidog (Public Beta) is free.


### 2. How do you handle the auth state?

View documentation for auth state here.


### 3. If the API needs to call the login API to get the token to place in the header before sending the request, how do you implement it?

View documentation for auth state here.


### 4. If the request parameters of API B depend on API A, how do you implement it?

View the documentation for how to pass data between APIs here. 

### 5. How do you handle APIs with different domains under the same project?

- Method 1: Create different services in the environment and set different base URLs for them correspondingly. The API group and API dimension can be associated with a certain base URL. We recommend this method. 
- Method 2: Set URL as environment variable, such as DOMAIN_1. Write API path as https:///users. When the API paths start with http:// or https://, the system will automatically ignore the base URL.
- Method 3: Set different environments for different domains, and run APIs under different domains by switching the environment. We do not recommend this solution.  


### 6. How do you read and modify API request messages through scripts? 

View the documentation for using scripts to read/modify API requests here.


### 7. Does it support using querying database fields as API parameters?

Yes, we do support it. For more details, view the database operation documentation here. 


### 8. Where do you store data? Is it stored locally or on cloud? Does it support offline access? Can you provide proprietary solutions? 

We do support both Apidog Saas version and proprietary solution.

The open source version of Apidog (SaaS) is free. We also provide proprietary solutions at a cost. 

For the Saas version, the data will be stored in the cloud so you will need a network to access.

For the proprietary version, the data can be stored internally so that you can access it without extranets. 

:::tip Please be aware that:
the environment and global variables are stored locally. These will not be synced to the cloud and will not be shared among team members. Therefore, you can use them to store tokens, accounts, passwords, or other  sensitive data. 

:::

### 9. My API call works as expected in Postman, but it returns an error in Apidog. Why?

Please check to make sure that the actual request messages (url, arguments, body, and header) delivered by postman and Apidog are the same.

Apidog: go to the actual request tab under return message to view the actual request message. 

Posman: click on the Console in the status bar at the bottom to view the actual request message.


### 10. Why is there no change after modifying the value of the environment or global variable?



1. Please check if there are variables with the same name defined in multiple places in environment variables, global variables and temporary variables. The priority of different variables is as follows: temporary variables > environment variables > global variables.
2. If there are variables with the same name, it will default to the variable type with the highest precedence. 
3. Please check if you modify the local value. Environment variables and global variables only read from local values, not remote values. 