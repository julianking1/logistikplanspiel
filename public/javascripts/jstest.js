

function jsTest(profil, tool){

   var xhr = new XMLHttpRequest();
   xhr.open('POST', '/post', true);
   xhr.setRequestHeader('Content-type', 'application/x-www-forum-urlencoded');
   xhr.onload = function(){
       console.log(this.responseText);
   };
   xhr.send('profil=test');

}