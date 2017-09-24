var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var emKPISchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        ruestkosten:  {type: Number, required: false},
        lagerwert:    {type: Number, required: false},
        einauskosten: {type: Number, required: false}
    }
);

module.exports = mongoose.model('endmontageKPI', emKPISchema);