var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var omSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        artikel: {type: String, required: true},
        anfangsbestand: {type: Number, required: true},
        zugangsnr: {type: Number, required: false},
        zugang: {type: Number, required: false},
        abgangsnr: {type: Number, required: false},
        abgang: {type: Number, required: false},
        endbestand: {type: Number, required: false}
    }
);

module.exports = mongoose.model('orderManagement', omSchema);