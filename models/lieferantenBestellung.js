var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lieferantenBestellung = new Schema({
    von:                {type: String, required:true},
    nr:                 {type: Number, required:true},
    austellungstakt:    {type: Number, required:true},
    artikel:            {type: String, required:true},
    wunschmenge:        {type: Number, required:false},
    wunschtakt:         {type: Number, required:false},
    bestaetigteMenge:   {type: Number, required:false},
    bestaetigterTakt:   {type: Number, required:false},
    erhalteneMenge:     {type: Number, required:false},
    erhaltenerTakt:     {type: Number, required:false},
    }
);

lieferantenBestellung.methods.getVon = function () {
    return this.von;
}

//andere getter und setter

module.exports = mongoose.model('lieferantenBestellung', lieferantenBestellung);