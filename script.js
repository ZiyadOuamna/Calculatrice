let affichage = document.getElementById("barrewhite");

function display(num){
    affichage.value += num;
}
function Delete2(){
    affichage.value = affichage.value - 1/*slice(0, -1)*/;
}
function Delete1(){
    affichage.value = ("");
}

/* on peux faire ceci :
let touche  = document.getElementsByClassName('.rrr').value;
    touche[3].addEventListener("click",display(''));
*/
/* ou bien en peux utiliser une boucle : 
for (let i=0 ;i<9;i++){
    touche[i].addEventListener("click", function(display(i+1)))
}


*/