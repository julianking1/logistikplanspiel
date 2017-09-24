var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var dcKPISchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        transportkosten:  {type: Number, required: false},
        lagerwert:    {type: Number, required: false},
        einauskosten: {type: Number, required: false},
        auftragskosten: {type: Number, required: false}
    }
);

module.exports = mongoose.model('distributionKPI', dcKPISchema);