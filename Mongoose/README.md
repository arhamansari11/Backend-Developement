## Chapter 7 - Mongoose and REST APIs

### [[ Reading Material ]]


You can install mongoose using npm :

```bash
npm install mongoose
```

After installing , you can import mongoose to your project :

```js
const mongoose = require("mongoose");
```

#### Connection to Database

To connect mongoose to your database `test`, you have to use the following commands :

```js

var mongoose = require('mongoose');
await mongoose.connect('mongodb://127.0.0.1:27017/test');
``` 

Connection can also be stored in a variable to check whether it is connected properly or not. Also to disconnect database later on. You can read more details [Here](https://mongoosejs.com/docs/connections.html)

#### Schema

Schema is the specification according to which data object is created in Database.

`taskSchema` which contains `title`, `status`, `date` fields. So every task object saved in database will have these 3 fields according to Schema given


```js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:  String,
    status: Boolean,
    date: { type: Date, default: Date.now }    
  });
```

Many types of data are allowed in Mongoose Schema. The common SchemaTypes are:

* String
* Number
* Date
* Boolean
* Mixed
* ObjectId
* Array

You can put a lot of conditions inside the Schema object :

```js

    age: { type: Number, default:18, min: 18, max: 65, required :true }
    // default value of Number is 18 and should be between 18-65, and can't be null or empty

```

Detailed information on SchemaTypes is [Here](https://mongoosejs.com/docs/schematypes.html)

#### Model

Model are similar to classes, they create a Class from Schema. These classes(i.e Models) can be used to create each new database object.


```js
const mongoose = require('mongoose');
const { Schema } =  mongoose;

const taskSchema = new Schema({
    title:  String,
    status: Boolean,
    date: { type: Date, default: Date.now },    
  });
  
const Task = mongoose.model('Task', taskSchema);  //Task Model to create new database objects for `tasks` Collection


```

#### Task 1

Connect mongoose to a database named `todolist` if you don't have a database with this name. Mongoose will create it after you perform any insert operation.

Creata a Schema named `taskSchema` and model named `Task` as shown above.


### CRUD in Mongoose

### Create - new objects

To Create new obejct in database we can use `new` keyword and create an object from Model. We can use `save()` function to save the object in database. Unless, you call save function - the object remains in memory. If your collection not yet created in MongoDB, it will created with name of Model pluralized (e.g Task will make a collection named `tasks`)


```js

server.post("/task",function(req,res){
    let task = new Task();

    task.title = "shopping";
    task.status = true;
    task.date = new Date();

    task.save();
})

```

#### Task 2

You have to create an API Endpoint to type `POST` named `/task`. It will create a new task item in database whenever called properly. All 3 fields `title`, `status`, `date` must be mandatory (`required`). If someone is not passing all fields properly, no database entry should be created.

```js
//request body :

{
    "title" : "task1",
    "status" : true,
    "date" :'2010-05-30"     

}

// response body should return the newly created object.

res.json(task);

```

Check using Mongo Compass/or Mongo Shell that new record in database is created. Also check name of collection. Is is `tasks` ?


### Read objects

To read new obejcts from database, one can use `find` query or similar queries. `find` queries also contain some conditions which can restrict what kind of data objects you want to read from database.


```js

server.get("/task/:name",function(req,res){
    Task.findOne({name:req.params.name},function(err,doc){
        console.log(doc)  // this will contain db object
    })
})


server.get("/tasks",function(req,res){
    Task.find({},function(err,docs){
        console.log(docs)  // this is an array which contains all task objects
    })
})


```
#### Task 3

You have to create an API Endpoint to type `GET` named `/tasks`. It will return all task available in collection `tasks`.

```js
//request is GET so no data in body :


// response body should return the all db objects of collection tasks.

res.json(tasks);

```

Check Mongo Compass/or Mongo Shell - if all records are returned in response. How you will change this API to make it return only one database record in which `title` is matched with `title` sent in request `query`.



### Update - existing objects

To Update an existing object in database we need to first find an object from database and then update in database. This might be considered as a combination of `find` and `save` methods.


There are generally 2 cases in update :

1. Updating all values and overwriting the object properties completely.
2. Updating only few values by setting their new values.


First scenario is covered using this query. Here you are overwriting all properties and resulting object will only have `name` property.

```js

server.put("/task/:name",function(req,res){
    Task.findOneAndReplace({name:req.params.name},{name:'YouStart'},{new:true},function(err,doc){
        console.log(doc)  // this will contain new db object
    })
})

```

Second scenario is covered using this query. Here you are only changing value of `name` property in existing object without changing other values in Object.

```js

server.put("/task/:name",function(req,res){
    Task.findOneAndUpdate({name:req.params.name},{name:'YouStart'},,{new:true},function(err,doc){
        console.log(doc)  // this will contain db object
    })
})

```

#### Task 4

You have to create an API Endpoint to type `PUT` named `/task/:id`. It will update existing task item in database which has ObjectId set to `id` you have passed. 

```js
//request params will have id in URL path :

{
    "title" : "task-changed",
}

// response body should return the newly updated object.

res.json(task);

```

Check using Mongo Compass/or Mongo Shell that only `title` of record in database is changed. All other properties remain the same.



### Delete - existing objects

To Delete existing object from database we need to first find an object from database and then delete. This might be considered as a combination of `find` and `delete` methods.


```js

server.delete("/task/:name",function(req,res){
    Task.findOneAndDelete({name:req.params.name},function(err,doc){
        console.log(doc)  // this will contain deleted object object
    })
})

```

#### Task 5

You have to create an API Endpoint to type `DELETE` named `/task/:id`. It will delete existing task item in database which has ObjectId set to `id` you have passed. 

```js
//request params will have id in URL path :

// response body should return the deleted object.

res.json(task);

```

Check using Mongo Compass/or Mongo Shell  that the record is deleted or not.




### [[ Chapter Notes ]]

- install mongoose
 `npm install mongoose`
 - Mongoose connection code
```javascript
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
```
 - Mongoose **Schema** : Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

```javascript
const  productSchema  =  new  Schema({

title: {type:  String, required:  true, unique:  true} ,
description:  String,
price: {type:  Number, min:[0,'wrong price'],required:  true},
discountPercentage: {type:  Number, min:[0,'wrong min discount'], max:[50,'wrong max discount']},
rating: {type:  Number, min:[0,'wrong min rating'], max:[5,'wrong max rating']},
brand: {type:  String,required:  true},
category: {type:  String, required:  true},
thumbnail: {type:  String, required:  true},
images: [ String ]

});
```

 - Mongoose **Model**  : model are built using a combination of Schema and name of Collection.
```javascript
const Product  =  mongoose.model('Product', productSchema);
```

 - Mongoose **Document** - its is instance of a model. so Model is like a class and documents are like its objects. These documents are directly saved in mongoDB.
```javascript
  const document = new Product();
 // document is actually saved in database after save()
  await document.save();
```

Mongoose Schema/Model can act as **Model** of **Model**-View-Controller concept.

### CRUD API and mongoose methods

**CREATE** :
1. **create product** - use **POST ** HTTP Method

```javascript
   const product = new Product();
   await product.save()
   ```
   
**READ** :

1. **read all products** - use **GET** HTTP Method
```javascript
const  products  =  await  Product.find();

const  products  =  await  Product.find({price:{$gt:500}});
```
2. **read 1 product** - use **GET**  HTTP Method
```javascript
const  product  =  await  Product.findById(id);
```

**UPDATE** :

1. replace product fields (all fields) - use **PUT**  HTTP Method
```javascript
const  doc  =  await  Product.findOneAndReplace({_id:id},req.body,{new:true})
```

2. update only some product fields - use **PATCH**  HTTP Method

```javascript
const  doc  =  await  Product.findOneAndUpdate({_id:id},req.body,{new:true})
```


**DELETE** :
1. delete  1 product  - use **DELETE** HTTP Method
```javascript
const  doc  =  await  Product.findOneAndDelete({_id:id})
```

###  [[ Assignments ]]
  
- **Assignment 1** : Make a Schema for `user` with `userSchema` which has these conditions :
	- `firstName` is required, maximum length 16 chars
	- `lastName` is not required, maximum length 16 chars
	- `age` is a Number, minimum value 12, maximum 100
	- `email` make a validator of email, as given in mongoose documentation.
	- `address` make address a nested data structure which has its own Schema [ **AddressSchema** ??] [ Hint: check mongoose documentation for sub-documents to do it
	
	Create `addressSchema` needed in above example as :
	- `pincode` : Number, required
	- `street` : String, required
	- `phone`: String, length=10

Now try to create this **user** object and **save** it to database. 
- What happens to **addresses** ? How address **document** is stored ? check if it creates a **new collection** in database
- What happens if you don't provide validated data in any field. [Note: Throw proper errors strings ]