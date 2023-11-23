
## Chapter 4 - REST API using Express JS

<img src="/RESTAPI.png" >

### [[ Reading Material ]]

#### HTTP Methods

The HTTP method is the type of request you send to the server. You can choose from these five types below:

-   `GET`  : This request is used to get a resource from a server. If you perform a  `GET`  request, the server looks for the data you requested and sends it back to you. In other words, a  `GET`  request performs a  `READ`  operation. This is the default request method.
    
-   `POST`  This request is used to create a new resource on a server. If you perform a  `POST`  request, the server creates a new entry in the database and tells you whether the creation is successful. In other words, a  `POST`  request performs an  `CREATE`  operation.
    
-   `PUT`  and  `PATCH`: These two requests are used to update a resource on a server. If you perform a  `PUT`  or  `PATCH`  request, the server updates an entry in the database and tells you whether the update is successful. In other words, a  `PUT`  or  `PATCH`  request performs an  `UPDATE`  operation.
    
-   `DELETE`  : This request is used to delete a resource from a server. If you perform a  `DELETE`  request, the server deletes an entry in the database and tells you whether the deletion is successful. In other words, a  `DELETE`  request performs a  `DELETE`  operation.
    

**REST API** are a combination of METHODS( GET, POST etc) , PATH (based on resource name)

Suppose you have a resource named  `task`, Here is the example of 5 REST APIs commonly available for task.

1.  **READ APIs :**

-   GET  `\tasks`  : to read all
    
-   GET  `\task\:id`  : to read a particular task which can be identified by unique  `id`
    

2.  **CREATE APIs :**

-   POST  `\tasks`  : to create a new task object (data will go inside request body)

3.  **UPDATE APIs :**

-   PUT  `\task\:id`  : to update a particular task which can be identified by unique  `id`. Data to be updated will be sent in the request body. Document data will be generally **totally replaced.** 
-  PATCH  `\task\:id`  : to update a particular task which can be identified by unique  `id`. Data to be updated will be sent in the request body. Only few fields will be replace which are sent in **request body**

4.  **DELETE APIs** :

-   DELETE  `\task\:id`  : to delete a particular task which can be identified by unique  `id`.

### [[ Chapter Notes ]] 

- **REST API** is a standard for making APIs.
	- We have to consider a resource which we want to access - like **Product**
	- We access **Product** using combination of HTTP method and URL style

**REST API ( CRUD - Create , Read , Update, Delete) :**
	
- **CREATE**
	- **POST** /products - create a new resource (product)
	
- **READ**
	- **GET** /products - read many resources (products)
	- **GET** /products/:id - read one specific resource (product)

- **UPDATE**
	- **PUT** /products/:id - update by replacing all content of specific resource (product).
	- **PATCH** /products/:id - update by only setting content from body of request and not replacing other parts of specific resource (product).

- **DELETE**
	- **DELETE** /products/:id - delete a specific resource (product).




###  [[ Assignments ]]
  
-  **Assignment 1** : Make an API similar to explained above for `Quotes` take dummy data from same site ([dummy json quotes](https://dummyjson.com/quotes))
