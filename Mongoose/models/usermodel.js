const moongose = require('mongoose');
const userSchema = new moongose.Schema(
    {
        _id: moongose.Schema.ObjectId,
        firstname: {
            type: String,
            required: true,
            unique: true
        },
        lastname: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            required: true,
            unique: true,
            min: [14, "your age is below 15"]
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }
    },
    { collection: 'usersData', versionKey: false }
);
const Users = moongose.model('usersData', userSchema)
module.exports = Users;








