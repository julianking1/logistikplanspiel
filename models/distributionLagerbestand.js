var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var dclagerbestandSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        schwarz: {type: String, required: true},
        weiss: {type: Number, required: true}

    }
);

module.exports = mongoose.model('distributionLagerbestand', dclagerbestandSchema);