var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var elagersummeSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        artikel: {type: String, required: true},
    bestandschwarz: {type: Number, required: true},
    bestandweiss: {type: Number, required: true},
    bestandrot: {type: Number, required: true},
    zugangschwarz: {type: Number, required: true},
    zugangweiss: {type: Number, required: true},
    zugangrot: {type: Number, required: true}

    }
);

module.exports = mongoose.model('endmontageLagersumme', elagersummeSchema);