var kundeChecklist = [
    "'Kundenbestellung' für schwarze und weiße Artikel an das Distribution Center weiterleiten",
    ""
    ];

var beschaffungChecklist = [
    "Materialkisten aus Posteingang nehmen",
    "Erhaltene Menge und Takt mit bestätigter Menge und Takt abgleichen",
    "Erhaltene Menge und Takt in 'Lieferantenbestellung' ausfüllen",
    "Material in Eingangslager sortieren und verschiedene Farben durch Rüststeine trennen",
    "IST-Takt im Formular 'Bestellübersicht Teile' eintragen",
    "Im Formular die Tabellenfelder 'Lagerbestand in und vor Eingangsprüfung' ausfüllen (vor Eingangsprüfung nur notwendig, wenn das Lager voll ist und eine Zwischenlagerung notwendig wird",
    "Neue 'Lieferantenbestellung' ausfüllen, in 'Bestellübersicht Teile' eintragen und an den Lieferanten senden"
    ];

var distributioncenterChecklist = [
    ""
];
var endmontageChecklist = [];
var vormontageChecklist = [];
var ordermanagementChecklist = [];
var lieferabwicklungChecklist = [];
var teilelagerChecklist = [];
var lieferantChecklist = [];





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