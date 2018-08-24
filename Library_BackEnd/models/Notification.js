var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Books_schema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    name: { type: Object }
}, {
        versionKey: false // You should be aware of the outcome after set to false
    });
module.exports = mongoose.model('Notification', Books_schema);
