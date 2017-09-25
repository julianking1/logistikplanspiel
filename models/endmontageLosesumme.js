var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var elosesummeSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        artikel: {type: String, required: true},
        summe: {type: Number, required: true}

    }
);

module.exports = mongoose.model('endmontageLosesumme', elosesummeSchema);