var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Books_schema = new mongoose.Schema({
    id: { type: Number },
    updated_date: { type: Date, default: Date.now() },
    name: { type: String },
    title: { type: String },
    description: { type: String },
    NoOfCopies: { type: Number },
    imageUrl: { type: String },
    isbn: { type: String,required:true,unique:true},
    authors: [String],
    category: [String],
    rating: { type: Number }
}, {
        versionKey: false // You should be aware of the outcome after set to false
    });
module.exports = mongoose.model('Book', Books_schema);
