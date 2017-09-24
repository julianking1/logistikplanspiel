var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var vfSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        artikel: {type: String, required: true},
        sollmenge:{type: Number, required: true},
        istmenge: {type: Number, required: false}

    }
);

module.exports = mongoose.model('vorfertigungFertigungsplan', vfSchema);