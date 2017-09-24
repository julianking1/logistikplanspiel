var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var vlagersummeSchema = new vlagersummeSchema({
    spielID: {type: Number, required: true},
    periode: {type: Number, required: true},
    artikel: {type: String, required: true},
    bestand: {type: Number, required: true},
    zugang: {type: Number, required: true}

}
);

module.exports = mongoose.model('vorfertigungLagersumme', vlagersummeSchema);