var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var lalagerbestandSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        artikel: {type: String, required: true},
        anzahl: {type: Number, required: true}

    }
);

module.exports = mongoose.model('lieferabwicklungLagerbestand', lalagerbestandSchema);