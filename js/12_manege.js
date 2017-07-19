//alert("manege");

/*for (var manege = 1; manege <=10 ; manege++){
    document.write("c'est le tour de manege n°" + manege + "<br/>")
}
var tour = parseInt(prompt("Indiquez le nombre de tour de manège désiré") )*/

var manege = 0;
while (manege < 10){
    manege++;
    document.write("c'est le tour n°" + manege + "<br/>");
}
/*boucle FOR*/
document.write("<hr/>");
for (var i = 1; i <= 10 ; i++) {
    document.write("c'est le tour n°" + i + "<hr/>");
}

document.write("<hr/>");
document.write("<hr/>");

/* 2---boucle While---*/
var question = parseInt(prompt("combien de tours ?"));
var compteur = 1;
while ( compteur < question ){
    document.write("C'est le tour n°" + compteur + "<br/>");
    compteur++;
}
document.write("<hr/>");


/*---Boucles FOR----*/


var nbTours = parseInt(prompt("combien de tour à faire ?"));
for (var tour = 1; tour <= nbTour; tour++){
    document.write("C'est le tour n°" + tour + "<br/>");
}
