var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var bebestSchema = new Schema ({
    spielID: {type: Number, required: true},
    periode: {type: Number, required: true},
    takt:    {type: Number, required: true},
    artikel:  {type: String, required: true},
    bestellnr: {type: Number, required: true},
    menge: {type: Number, required: true},
    plantakt: {type: Number, required: true},
    isttakt: {type: Number, required: true}

});

module.exports = mongoose.model('beschaffungBestelluebersicht', bebestSchema);