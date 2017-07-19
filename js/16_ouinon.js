//alert("coucou");
// var jeu = parseInt(prompt("Voulez vous jouer à ni oui ni non ?"));

var disMoi="";
var i =  0;

while((disMoi !== "oui") && (disMoi !== "non")){
    disMoi = prompt("alors on joue au Ni oui Ni non ?");
    document.write(disMoi + "pour la " + i + "° fois, dis moi oui non!<br/>");
    i++
}
document.write("<h1 style='background-color:cyan; text-align:center;'>fini;-) !</h1>");
