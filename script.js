let affichage = document.getElementById("barrewhite");

function display(num){
    affichage.value += num;
}

function Delete1(){
    affichage.value = "";
}
function Delete2(){
    affichage.value = affichage.value.substring(0,affichage.value.length-1)/*slice(0, -1)*/;
    //on a affichage.value sou forme d'une table et donc on est soustraire de affichage.value[0] jusqu'a affichage.value[le avant dernier nombre dans ce tableau est affichage.value.length - 1]
}
