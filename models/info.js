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
    "Kundenzufriedenheit (z.B. Lieferfähigkeit, Liefertreue). "+
    "Der Kunde ist kein Außenstehender, sondern auslösendes und abschließendes Element" +
    "der Logistikkette. "+
    "Der Kunde kann Lieferzeiten bestimmen, sich über den Stand der Aufträge informieren, " +
    "Änderungswünsche äußern und Aufträge erhöhen bzw. stornieren. " +
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
    "Der Lagerarbeiter im Vertrieb - Distribution Center beinhaltet eine Abwicklungsaufgabe, deren Bedeutung " +
    "für die Logistik oft unterschätzt wird. Der Lagerarbeiter sitzt in einem Vertriebslager im Ausland " +
    "und stellt sicher, dass die Produkte pünktlich beim Kunden ankommen. Er vereinnahmt die ankommenden " +
    "internen Lieferungen aus dem Werk (überprüfen, einlagern und buchen). Im nächsten Schritt bereitet " +
    "er die anstehenden Kundenlieferungen vor, d.h. er lagert die Produkte aus, stellt die Transporte " +
    "zusammen und verpackt die Ware. Diese Arbeit nennt man kommissionieren. Der Lagerarbeiter ist die " +
    "letzte Person, die Fehler in der Auslieferung verhindern kann, indem er sofgfältig Lieferdaten " +
    "überprüft und die Lieferung rechtzeitig anstößt. Er arbeitet eng mit dem Vertriebsdisponenten " +
    "zusammen und hat eine rein abwickelnde Aufgabe."
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
    "Der Disponent im Vertrieb (Order Manager) hat die schwierige Aufgabe, die Verfügbarkeit der " +
    "Produkte im Vertriebslager sicherzustellen. Er sorgt dafür, dass im Lager so viele Produkte stehen, " +
    "dass der Kunde pünktlich die gewünschten Mengen ausgeliefert bekommt. Er plant die Bestände " +
    "im Vertriebslager und bestätigt dem Kunden gegenüber mögliche Liefertermine. Die Aufgabe ist " +
    "anspruchsvoll: Legt er sich zu viele Bestände in sein Lager, sind die Bestandskosten zu " +
    "hoch, denn auf seiner Lagerstufe stehen die teuersten Fertigerzeugnisse. Fällt sein Bestand " +
    "hingegen auf ein zu niedriges Niveau, kann er seinen Lieferversprechungen gegenüber " +
    "dem Kunden nicht nachkommen und Verzugsstrafen sind die Folge. Diese Aufgabe entscheidet " +
    "über Liefertreue und Lieferfähigkeit im ganzen Spiel. Ein sehr interessanter Arbeitsplatz!"
];

var lieferabwicklungBeschreibung = [
    "Als Disponent und Lieferabwickler im Werk geht es darum, Vertriebswünsche aus den " +
    "Auslandsniederlassungen mit den eigenen Fertigungskapazitäten abzugleichen. Dabei bestätigt " +
    "der Disponent Liefertermine und liefert pünktlich die Bestellungen aus. Er entnimmt " +
    "zunächst die fertigen Produkte aus der Endmontage und vereinnahmt sie in seinem Lager. " +
    "Im nächsten Schritt bereitet er die anstehenden Auslieferungen vor, d.h. er lagert die " +
    "Produkte aus, stellt die Transporte zusammen und verpackt die Ware. Diese Arbeit " +
    "nennt man kommissionieren. Anschließend bearbeitet er die vom Vertrieb zugesandten " +
    "internen Bestellungen, er klärt Termine und Mengenwünsche. " +
    "Er steht in engem Kontakt mit dem Vertrieb und kann auch kurzfristig abweichende " +
    "Termine und Mengen ändern, falls dies notwendig erscheint. Letztlich bereitet " +
    "er die Lieferungen durch Beladen des LKW für den Vertrieb zum Absenden im nächsten Takt vor."
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