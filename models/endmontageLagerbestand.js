var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var elagerbestandSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        schwarz: {type: Number, required: true},
    weiss: {type: Number, required: true},
    rot: {type: Number, required: true}

    }
);

module.exports = mongoose.model('endmontageLagerbestand', elagerbestandSchema);