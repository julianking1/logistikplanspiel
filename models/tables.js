var kundeTabellen = [
   "Auftragsübersicht",
   "Umsatz",
   "Lieferverzugskosten"
];

var beschaffungTabellen = [
    "Lagerbestand (vor Eingangsprüfung)",
    "Lagerbestand (in Eingangsprüfung)",
    "Bestellübersicht"
];

var distributioncenterTabellen = [
    "Lagerzugang",
    "Lager-/Unterwegsbestand",
    "Auftragsbearbeitung"
];

var endmontageTabellen = [
    "Fertigungsplan",
    "Lagerbestand",
    "Lagerzugang"
];

var vorfertigungTabellen = [
    "Fertigungsplan",
    "Lagerbestand",
    "Lagerzugang"
];

var ordermanagementTabellen = [
    "Schwarz",
    "Weiß"
];

var lieferabwicklungTabellen = [
    "Lagerzugang",
    "Lager-/Unterwegsbestand",
    "Bestellübersicht"
];


module.exports = {

    getNames: function(profil) {

        switch (String(profil)) {
            case 'kunde':
                return kundeTabellen;
            case 'beschaffung':
                return beschaffungTabellen;
            case 'distributioncenter':
                return distributioncenterTabellen;
            case 'endmontage':
                return endmontageTabellen;
            case 'vorfertigung':
                return vorfertigungTabellen;
            case 'ordermanagement':
                return ordermanagementTabellen;
            case 'lieferabwicklung':
                return lieferabwicklungTabellen;
        }
    }
};