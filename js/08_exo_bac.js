//alert("coucou")

var moyenne = parseFloat(prompt("Quelle est ta moyenne au bac ?"));
// var lamoyenne = 10;
// var LaMoyenne1 = 14;

if(moyenne < 10) {
    document.write("moyenne :" + moyenne + " Vous êtes recalés" );
} else if ( (moyenne >= 10) && (moyenne<14) ){
    document.write("moyenne :" + moyenne + " Vous êtes recu. Bravo!");
} else if ((moyenne >= 14 ) && (moyenne <=20)) {
    document.write("Vous êtes recu avec mention. Felicitation!");
} else {
    alert( "tu as triché");

}
