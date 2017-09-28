var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var kumSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        schwarz: {type: Number, required: false},
        weiss:   {type: Number, required: false}
    }
);

module.exports = mongoose.model('kundeUmsatz', kumSchema);