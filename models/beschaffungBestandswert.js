var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var bebestweSchema = new Schema ({
    spielID: {type: Number, required: true},
    periode: {type: Number, required: true},
    inSummeschwarz: {type: Number, required: true},
    inSummeweiss: {type: Number, required: true},
    inSummerot:  {type: Number, required: true},
    vorSummeschwarz: {type: Number, required: true},
    vorSummeweiss: {type: Number, required: true},
    vorSummerot: {type: Number, required: true}

});

module.exports = mongoose.model('beschaffungBestandswert', bebestweSchema);