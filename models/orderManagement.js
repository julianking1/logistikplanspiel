var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var omSchema = new Schema({
        spielID: {type: Number, required: true},
        periode: {type: Number, required: true},
        takt:    {type: Number, required: true},
        artikel: {type: String, required: true},
        anfangsbestand: {type: Number, required: false},
        zugangsnr: {type: Number, required: false},
        zugang: {type: Number, required: false},
        abgangsnr1: {type: Number, required: false},
        abgang1: {type: Number, required: false},
        abgangsnr2: {type: Number, required: false},
        abgang2: {type: Number, required: false},
        abgangsnr3: {type: Number, required: false},
        abgang3: {type: Number, required: false},
        endbestand: {type: Number, required: false}
    }
);

module.exports = mongoose.model('orderManagement', omSchema);