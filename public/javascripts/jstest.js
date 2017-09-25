

function jsTest(profil, tool){
   console.log(profil, tool);

   var data = new FormData();
   data.append('profil', profil);
   data.append('tool', tool);

   var xhr = new XMLHttpRequest();
   xhr.open('POST', '/post', true);
   xhr.setRequestHeader('Content-type', 'application/x-www-forum-urlencoded');
   xhr.onload = function(){
       console.log(this.responseText);
   };
   xhr.send(data);

}