var kundeChecklist = [
    'Aufgabe1 von Kunde',
    'Aufgabe2 von Kunde',
    '...'];

var beschaffungChecklist = [
    'Aufgabe1 von Beschaffung',
    'Aufgabe2 von Beschaffung',
    '...'];

var distributioncenterChecklist = [];
var endmontageChecklist = [];
var vormontageChecklist = [];
var ordermanagementChecklist = [];
var lieferabwicklungChecklist = [];
var teilelagerChecklist = [];





module.exports = {

    getDataArray: function(profil) {
        switch (String(profil)) {
            case 'kunde':
                return kundeChecklist;
            case 'beschaffung':
                return beschaffungChecklist;
            case 'distributioncenter':
                return distributioncenterChecklist;
            case 'endmontage':
                return endmontageChecklist;
            case 'vormontage':
                return vormontageChecklist;
            case 'ordermanagement':
                return ordermanagementChecklist;
            case 'lieferabwicklung':
                return lieferabwicklungChecklist;
            case 'teilelager':
                return teilelagerChecklist;
        }
    }
};