var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var kuaufSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        bestellnr: {type: Number, required: true},
        artikel: {type: String, required: true},
        menge: {type: Number, required: true},
        wunschtermin: {type: Number, required: true},
        bestaetigtertermin: {type: Number, required: false},
        erhalttermin: {type: Number, required: false}
    }
);

module.exports = mongoose.model('kundeAuftragsuebersicht', kuaufSchema);