var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var ssSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        datum: {type: String, required: true},
        name: {type: String, required: true},
    }
);

module.exports = mongoose.model('spielstand', ssSchema);