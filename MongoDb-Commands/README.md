# mongo_db_commands

All MongoDb commands you will ever need (MongoDb Cheatsheet)
In this post, we will see a comprehensive list of all the MongoDB commands you will ever need as a MongoDB beginner. This list covers almost all the most used commands in MongoDB.

I will assume that you are working inside a collection named 'comments' on a MongoDB database of your choice

# 1. Database Commands
## View all databases
show dbs
## Create a new or switch databases 
use dbName
## View current Database
db
## Delete Database 
db.dropDatabase()
# 2. Collection Commands
## show collections
### Create a collection named 'comments'
db.createCollection('comments')
## Drop a collection named 'comments'
db.comments.drop()
#3. Row(Document) Commands
## Show all Rows in a Collection 
db.comments.find()
## Show all Rows in a Collection (Prettified)
db.comments.find().pretty()
## Find the first row matching the object
db.comments.findOne({name: 'Harry'})
## Insert One Row
db.comments.insert({
    'name': 'Harry',
    'lang': 'JavaScript',
    'member_since': 5
 })
## Insert many Rows
db.comments.insertMany([{
    'name': 'Harry',
    'lang': 'JavaScript',
    'member_since': 5
    }, 
    {'name': 'Rohan',
    'lang': 'Python',
    'member_since': 3
    },
    {'name': 'Lovish',
    'lang': 'Java',
    'member_since': 4
}])

## Search in a MongoDb Database
db.comments.find({lang:'Python'})
## Limit the number of rows in output
db.comments.find().limit(2)
## Count the number of rows in the output
db.comments.find().count()
## Update a row
db.comments.updateOne({name: 'Shubham'},
{$set: {'name': 'Harry',
    'lang': 'JavaScript',
    'member_since': 51
}}, {upsert: true})
## Mongodb Increment Operator
db.comments.update({name: 'Rohan'},
{$inc:{
    member_since: 2
}})
## Mongodb Rename Operator
db.comments.update({name: 'Rohan'},
{$rename:{
    member_since: 'member'
}})
## Delete Row 
db.comments.deleteOne({name: 'Harry'})
## Less than/Greater than/ Less than or Eq/Greater than or Eq
db.comments.find({member_since: {$lt: 90}})
db.comments.find({member_since: {$lte: 90}})
db.comments.find({member_since: {$gt: 90}})
db.comments.find({member_since: {$gte: 90}})

## Clear mongodb compass terminal
cls

