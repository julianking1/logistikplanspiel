var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var dcSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        anzauftraege: {type: String, required: true}
    }
);

module.exports = mongoose.model('distributionAuftragsbearbeitung', dcSchema);