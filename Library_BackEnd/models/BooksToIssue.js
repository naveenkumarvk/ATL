var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Books_schema = new mongoose.Schema({
    id: { type: Number },
    updated_date: { type: Date, default: Date.now() },
    name: { type: String },
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    isbn: { type: String },
    authors: [String],
    category: [String],
    assigned: { type: Boolean, default: false },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    lastDate: { type: Date },
    assignedDate: { type: Date },
    rating: { type: Number }
}, {
        versionKey: false // You should be aware of the outcome after set to false
    });
module.exports = mongoose.model('BookToIssue', Books_schema);
