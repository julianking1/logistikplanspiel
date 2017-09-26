function loadContent(profil, type, contentNum) {

    if (contentNum === undefined){
        contentNum = 1;
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