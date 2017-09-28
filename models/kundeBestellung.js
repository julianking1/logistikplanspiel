var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var kbSchema = new Schema({
        spielID:            {type: Number, required:true},
        nr:                 {type: Number, required:true},
        austellungstakt:    {type: Number, required:true},
        artikel:            {type: String, required:true},
        wunschmenge:        {type: Number, required:true},
        wunschtakt:         {type: Number, required:true},
        bestaetigteMenge:   {type: Number, required:false},
        bestaetigterTakt:   {type: Number, required:false},
        erhalteneMenge:     {type: Number, required:false},
        erhaltenerTakt:     {type: Number, required:false},
    }
);

module.exports = mongoose.model('kundeBestellung', kbSchema);