var kundeChecklist = [
    "'Kundenbestellung' für schwarze und weiße Artikel an das Distribution Center weiterleiten",
    "Materiallieferung des Distribution Center entgegennehmen und auf dem Bestellschein die erhaltene Menge und Takt ausfüllen",
    "Im Formular 'Auftragsübersicht' Termin bestätigung und erhalten eintragen",
    "Im Formular 'Umsatz' erhaltene Menge eintragen",
    "Bei Lieferverzug: Lieferverzugskosten berechnen",
    "2 neue Aufträge vorbereiten (jeweils schwarz und weiß vom Stapel ziehen) und die Felder: Von, Auftragsnummer, Ausstellungstakt und Wunschtakt befüllen",
    "Im Formular 'Auftragsübersicht' die Felder: Farbe, Menge, Terminwunsch, Termin bestätigt und Termin erhalten befüllen"
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
    "Interne Lieferungen aus dem Briefkasten nehmen und einlagern",
    "Erhaltene Menge und Takt auf 'internem Bestellschein' notieren",
    "Lagerzugangsmenge und Lagerbestand auf Formular eintragen",
    "1 Takt vor bestätigtem Termin: vorbereitete Lieferung an Kunden senden",
    "Kundenbestellung aud dem Briefkasten entnehmen. Sofern eine Bestätigung enthalten ist: 2 Takte vor bestätigtem Termin auf Basis des externen Bestellschein eine Lieferung zusammenstellen," +
    ", sofern Bestätigung nicht enthalten: Anzahl der Neuaufträge im Formular 'Auftragsbearbeitung' eintragen und Kundenbestellung an Order Management senden",
    ];

var endmontageChecklist = [
    "Vorfertigung entleeren und in Baugrupen einlagern",
    "Rote Steine aus Briefkasten entnehmen und in Baugruppe einlagern",
    "Im Formular 'Lagerzugang' und 'Lagerbestand' (=bisheriger Bestand und Zugang) notieren",
    "Endmontage gemäß des 'Fertigungsplan' befüllen",
    "IST im 'Fertigungsplan' eintragen"
    ];

var vorfertigungChecklist = [
    "Auf Basis des 'Fertigungsplan' Material zusammenbauen und Vorfertigung befüllen",
    "IST-Stand in 'Fertigungsplan' eintragen",
    "Eingangslager entleeren und Material in das Teilelager einlagern",
    "Zugang im Formular 'Lagerzugang' eintragen, sowie das Formular 'Lagerbestand' befüllen",
    "Rote Steine an Endmontage senden"
    ];

var ordermanagementChecklist = [
    "Materialkiste aus Briefkasten entnehmen und an Distribution Center weiterleiten",
    "Kundenbestellschein aus Briefkasten entnehmen und Auftrag bestätigen, indem die Felder bestätigter Takt und Menge ausgefüllt werden",
    "Termin, Liefermenge und Takt in Dispoübersicht eintragen",
    "Kundenbestellung an Distribution Center weiterleiten",
    "Internen Bestellschein ausfüllen und Informationen in Dispoüberishct überführen",
    "Internen Bestellschein an Lieferabwicklung senden"
    ];

var lieferabwicklungChecklist = [
    "Bestellscheine in Formular 'Bestellübersicht:Artikel' überführen",
    "Bestätigten Takt und Menge auf Bestellscheinen aufüllen",
    "2 Tage vor bestätigtem Termin: Lieferung zum Versand vorbereiten",
    "Endmontage entleeren",
    "Die Formulare 'Lagerzugang' sowie 'Lagerbestand' (=Lagerbestand + kommisionierter Bestand in Kiste + Bestand in Kiste bei Order Management aufüllen",
    ];


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
            case 'vorfertigung':
                return vorfertigungChecklist;
            case 'ordermanagement':
                return ordermanagementChecklist;
            case 'lieferabwicklung':
                return lieferabwicklungChecklist;

        }
    }
};