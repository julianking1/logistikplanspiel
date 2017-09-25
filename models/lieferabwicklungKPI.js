var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var laKPISchema = new Schema({
    spielID: {type: Number, required: true},
    periode: {type: Number, required: true},
    internebestellkosten: {type: Number, required: false},
    lagerwert: {type: Number, required: false},
    einauskosten: {type: Number, required: false}

    }
);

module.exports = mongoose.model('lieferabwicklungKPI', laKPISchema);