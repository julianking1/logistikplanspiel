var kundeBeschreibung = [
    "Kunde",
    "Dies ist der Arbeitsplatz des Kunden."
];

var beschaffungBeschreibung = [
    "Beschaffung",
    "Dies ist der Arbeitsplatz der Beschaffung."

];

var distributioncenterBeschreibung = [
    "Distribution Center",
    "Dies ist der Arbeitsplatz der Distribution Center."
];

var endmontageBeschreibung = [
    "Endmontage",
    "Dies ist der Arbeitsplatz der Endmontage."
];

var vorfertigungBeschreibung = [
    "Vorfertigung",
    "Dies ist der Arbeitsplatz der Vorfertigung."
];

var ordermanagementBeschreibung = [
    "Order Management",
    "Dies ist der Arbeitsplatz des Order Managements."
];

var lieferabwicklungBeschreibung = [
    "Lieferabwicklung",
    "Dies ist der Arbeitsplatz der Lieferabwicklung."
]
var lieferantBeschreibung = [
    "Lieferant",
    "Dies ist der Arbeitsplatz der Lieferanten."
];


module.exports = {

    getBeschreibung: function(profil) {

        switch (String(profil)) {
            case 'kunde':
                return kundeBeschreibung;
            case 'beschaffung':
                return beschaffungBeschreibung;
            case 'distributioncenter':
                return distributioncenterBeschreibung;
            case 'endmontage':
                return endmontageBeschreibung;
            case 'vormontage':
                return vorfertigungBeschreibung;
            case 'ordermanagement':
                return ordermanagementBeschreibung;
            case 'lieferabwicklung':
                return lieferabwicklungBeschreibung;
            case 'lieferant':
                return lieferantBeschreibung;
        }
    }
};