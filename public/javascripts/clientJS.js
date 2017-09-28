//rename!!!

function loadContent(profil, type, contentNum) {

    if (contentNum === undefined){
        contentNum = '0';
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/loadContent', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {

        var div = document.createElement('div');
        div.className = 'currentContent';
        div.innerHTML = this.responseText;
        var inhalt = document.getElementsByClassName('inhalt')[0];
        while (inhalt.firstChild){
            inhalt.removeChild(inhalt.firstChild);
        }
        inhalt.appendChild(div, inhalt.childNodes[1]);
    };
    xhr.send(JSON.stringify({
        profilParam: profil,
        typeParam: type,
        contentNum: contentNum
    }));

}

function deadEnd(){
    window.alert("Leider noch nicht implementiert.");
}


function save(profil, type, contentNum){

    var data = {};

    var inhalt = document.getElementsByClassName('input');

    for(i = 0; i<inhalt.length; i++){
        var item = inhalt[i].firstChild;
        var value = item.value;
        data[''+item.getAttribute('id')] = value;
    }

    //absenden
    if (contentNum === undefined){
        contentNum = 1;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/save', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {

        console.log("HUHU");

        var div = document.createElement('div');
        div.className = 'currentContent';
        div.innerHTML = this.responseText;
        var inhalt = document.getElementsByClassName('inhalt')[0];
        while (inhalt.firstChild){
            inhalt.removeChild(inhalt.firstChild);
        }
        inhalt.appendChild(div, inhalt.childNodes[1]);
    };

    xhr.send(JSON.stringify({
        profilParam: profil,
        typeParam: type,
        contentNum: contentNum,
        data: data
    }));

    console.log(data);
}

function loadGame(name, datum){

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'loadGame', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {

        var spielName = this.responseText;
        var fertig = document.getElementById('fertig');
        fertig.innerHTML = spielName + " erfolgreich geladen!";

    };
    xhr.send(JSON.stringify({
        name: name,
        datum: datum
    }));

}


function newGame(){

    var neu = document.getElementById('neu');
    var value = neu.value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'saveGame', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {

        document.getElementsByTagName('html')[0].innerHTML = this.responseText;

    };
    xhr.send(JSON.stringify({
        name: value
    }));

}
