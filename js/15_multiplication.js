/*alert("coucou")
var choix = parseInt(prompt("choisi un nombre:"));
 for(var i = 1; i <= 10 ; i++){
     var res = choix * i;
    document.write(choix + " x " + i + " = " + res + "<br/>");
}*/
var choix = parseInt(prompt("choisi un nombre : entre 2 et 9"));
if((choix  >= 2) && (choix <= 9)){
for(var i = 1; i<=10; i++){
    var res = choix * i;
    document.write(choix + " x " + i + " = " + res + "<br/>");
    }
}
else{
    document.write("Ce chiffre n'est pas compris entre 2 et 9");
}
