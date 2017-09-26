var kundeTabellen = [
   "Auftragsübersicht",
   "Umsatz",
   "Lieferverzugskosten"
];

var beschaffungTabellen = [
    "Lagerbestand",
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
    "test"
];

var lieferabwicklungTabellen = [
    "Lagerzugang",
    "Lager-/Unterwegsbestand",
    "Bestellübersicht"
];


module.exports = {

    getInfo: function(profil) {

        switch (String(profil)) {
            case 'kunde':
                return kundeTabellen;
            case 'beschaffung':
                return beschaffungTabellen;
            case 'distributioncenter':
                return distributioncenterTabellen;
            case 'endmontage':
                return endmontageTabellen;
            case 'vormontage':
                return vorfertigungTabellen;
            case 'ordermanagement':
                return ordermanagementTabellen;
            case 'lieferabwicklung':
                return lieferabwicklungTabellen;
        }
    }
};