var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var vlosesummeSchema = new vlosesummSchema({
    spielID: {type: Number, required: true},
    periode: {type: Number, required: true},
    artikel: {type: String, required: true},
    summe: {type: Number, required: true}

}
);

module.exports = mongoose.model('vorfertigungLosesumme', vlosesummeSchema);