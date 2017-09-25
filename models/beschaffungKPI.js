var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var beKPISchema = new Schema ({
    spielID: {type: Number, required: true},
    periode: {type: Number, required: true},
    lagerwert: {type: Number, required: false},
    anzBestellungen: {type: Number, required: false},
    bestellkostenextern: {type: Number, required: false}
});

module.exports = mongoose.model('beschaffungKPI', beKPISchema);