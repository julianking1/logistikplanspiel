var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var beUebersichtSchema = new Schema ({
    spielID: {type: Number, required: true},
    periode: {type: Number, required: true},
    summebestSchwarz: {type: Number, required: true},
    summebestWeiss: {type: Number, required: true},
    summebestRot:  {type: Number, required: true}

});

module.exports = mongoose.model('beschaffungsUebersicht', beUebersichtSchema);