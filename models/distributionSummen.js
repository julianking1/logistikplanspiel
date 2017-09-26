var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var dbsummeSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        bestandschwarz: {type: Number, required: true},
        bestandweiss: {type: Number, required: true},
        zugangschwarz: {type: Number, required: true},
        zugangweiss: {type: Number, required: true},
        anzauftraege: {type: Number, required: false}
    }
);

module.exports = mongoose.model('distributionSummen', dbsummeSchema);