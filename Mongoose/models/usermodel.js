const moongose = require('mongoose');

const usersSchema = new moongose.Schema(
    {
        _id: moongose.Schema.ObjectId,
        name: String,
        age: Number,
        email: String,
    },
    { collection: "userInfo", versionKey: false }
);
const Users = moongose.model("users", usersSchema);
module.exports = Users;