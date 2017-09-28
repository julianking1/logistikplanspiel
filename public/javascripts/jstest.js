


function jsTest(profil, tool) {


    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/post', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {


        var div = document.createElement('div');
        div.className = 'newContent';
        div.innerHTML = this.responseText;
        document.getElementsByTagName('body')[0].appendChild(div);
    };
    xhr.send(JSON.stringify({
        value: 'value',
        profilParam: profil,
        toolParam: tool
    }));

}

