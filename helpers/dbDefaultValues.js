var setterFunctions = require("../helpers/setterFunctions");

app.set('spielID', 1);

function generateDefaultValuesInDB (spielID){
    //Lieferant
    setterFunctions.createLieferantenBestellung()
}


module.exports = {
    generateDefaultValuesInDB:generateDefaultValuesInDB
}