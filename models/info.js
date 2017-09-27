var kundeBeschreibung = [

    "Der Kunde ist der Erfolgstreiber im Spiel und die wichtigste Person. Er bringt die " +
    "Aufträge herein und vereinnahmt die Lieferungen. Er hängt nicht von uns ab, sondern wir " +
    "von ihm. Seine Aufgabe ist es, die empfangene Menge, die Artikelart und die Terminwünsche " +
    "mit seiner ursprünglichen Bestellung abzugleichen. Darüber hinaus errechnet er für " +
    "uns den Umsatz, Transportkosten und mögliche Verzugskosten. An den Wünschen des Kunden "+
    "orientieren sich alle Mitspieler, denn er bringt über den Umsatz das notwendige Geld, um "+
    "die Logistikkosten abzudecken. Wir tun ihm keinen Gefallen, wenn wir ihn beliefern, " +
    "sondern er tut uns einen Gefallen, wenn er uns die Möglichkeit gibt, ihn zu bedienen. " +
    "Seine Zufriedenheit ist das entscheidende Kriterium für den Erfolg der gesamten " +
    "Logistikkette. Daher errechnet der Kunde auch regelmäßig weitere Kennzahlen der " +
    "Kundenzufriedenheit (z.B. Lieferfähigkeit, Liefertreue)."+
    "Der Kunde ist kein Außenstehender, sondern auslösendes und abschließendes Element" +
    "der Logistikkette."+
    "Der Kunde kann Lieferzeiten bestimmen, sich über den Stand der Aufträge informieren, " +
    "Änderungswünsche äußern und Aufträge erhöhen bzw. stornieren." +
    "Er hat seinen Firmensitz im Ausland und steht mit dem Disponenten im Vertrieb als " +
    "Ansprechpartner in Kontakt. Die anderen Mitglieder der Prozesskette reden nicht " +
    "mit ihm, da er eine andere Sprache spricht und auch kein besonderes Interesse " +
    "an einer Kommunikation hat. Mit dem Kunden kann man sich nicht streiten, " +
    "denn diesen Streit würden wir verlieren. Er interessiert sich lediglich " +
    "für einenen reibungslosen Ablauf der Bestellung und ist dann zufrieden, " +
    "wenn der Auftrag pünktlich und fehlerfrei abgewickelt wird."

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
            case 'vorfertigung':
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