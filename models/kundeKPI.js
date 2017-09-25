var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var kuKPISchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        umsatz: {type: Number, required: false},
        lieferverzugskosten: {type: Number, required: false},
        transportkosen: {type: Number, required: false},
        lieferfaehigkeit: {type: Number, required: false},
        liefertreue: {type: Number, required: false}
    }
);

module.exports = mongoose.model('kundeKPI', kuKPISchema);