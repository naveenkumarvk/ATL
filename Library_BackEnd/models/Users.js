var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Books_schema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    imageUrl: { type: String },
}, {
        versionKey: false // You should be aware of the outcome after set to false
    });
module.exports = mongoose.model('Users', Books_schema);
