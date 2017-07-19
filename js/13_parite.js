//alert("coucou");
for (var i = 1; i <= 10; i++) {
if (i % 2 === 0) {
    //console.log(i + " est pair");
    document.write("<h4>" + i + "est pair</h4>");
}
    else{
    console.log(i + "est impair");
    document.write("<h4>" + i + "est impair</h4>");
    }
}
document.write("<hr/>");


/*var nombre = parseInt(prompt("Entrez un chiffre"));
var compteur = nbTours;
for (var nbTours = tours <= nbTours; nbTours++);
    document.write("C'est le tour n°" + tour + "<br/>");*/


    var chiffre = parseInt(prompt("choisir un nombre entier"));
    var chiffreMax = (chiffre + 10);
    while (chiffre <= chiffreMax) {
        if (chiffre % 2 === 0) {
            document.write("<h4>" + chiffre + "est impair</h4>");
        }else{
        document.write("<h4>" + chiffre + "est impair</h4>");

    }
    chiffre++;
console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1
console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2
}
