var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var laSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        bestellnr:{type: Number, required: true},
        menge: {type: Number, required: true},
        wunschtermin: {type: Number, required: false},
        bestaetigtertermin: {type: Number, required: false}

    }
);

module.exports = mongoose.model('lieferabwicklungBestelluebersicht', laSchema);