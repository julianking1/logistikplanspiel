var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var dclagerzugangSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        artikel: {type: String, required: true},
        zugang: {type: Number, required: true}

    }
);

module.exports = mongoose.model('distributionLagerzugang', dclagerzugangSchema);