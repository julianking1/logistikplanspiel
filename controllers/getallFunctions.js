var lieferantenBestellung = require ("../models/lieferantenBestellung.js");
var schemaFunctions = require("../helpers/setterFunctions");
var getterFunctions = require("../helpers/getterFunctions");
var updateFunctions = require("../helpers/updateFunctions");
var app = require("../app");

model.exports = {
getAll: getAll()
}


function getAll(rolle, tabelle, callback) {
    switch (rolle) {
        case beschaffung:
            switch (tabelle) {
                case: 0
                    getterFunctions.getAllbeschaffungBestandswert
            }
    }
}