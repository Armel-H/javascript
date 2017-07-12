//syntaxe de base

// commentaire sur une ligne

/*
    ici, je fais des commentaire sur
    plusieurs lignes.
*/

// --1 : Déclarer une variable en js
//var Prenom;

//-- 2 : Affecter une valeur à une variable c-à-d la valeur est ds la variable.
//Prenom = "Sandra";

//var Prenom = "Sandra";

//--3 : une instruction se termine tjs avec un point virgule, aussi il est possilble d'écrire plusieurs instruction sur une seule ligne.
//inst_1;
//inst_2; inst_3;

//--4 : Afficher une boite de dialogue (2 facons)
//alert("super, tu es arrivé sur mon site!")
 //windows.alert("super tu es arrivé sur mon site!")

 //--5 : Afficher dans la console (ici, la valeur de ma variable Prenom)
 //console.log(Prenom);

 //--6 : afficher dans la page web
 //document.write("A la pause vous aurez des haribos Pik !");

 //--7 : Demander à l'utlisisateur une valeur(2 facons)
 //--window.prompt("Question: On est quel jour?", "jour de la semaine");
 //prompt("Question: On est quel jour?","jour de la semaine");

 //--et pour manipuler cette valeur, je n'oublie pas de la stocker
// var jour = prompt("Question: On est quel jour?","jour de la semaine")
//console.log(jour);

//--8 : Attention /!\ le js est sensible à la casse('case sensitive')
//mavariable =/= maVariable =/= maVariable
//              camel case     snake case

/* 9 : une variable ne peut pas commencer par un chiffre, ne doit
contenir que des caractère alphanumériques, et ne peut pas être un
mot réservé (var, for...des éléments natifs du langage JS)*/
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s


//--10 : une variable peut être déclarée de facon explicite :
//var fruit = "fraise";

//ou implicite :
//haribo = "Tagada";


/*-------------------------------------------------------------------------------------

/~~~~~~~~LES TYPES DE VARIABLES~~~~~~~~~/

---------------------------------------------------------------------------------------*/

//--1. Chaîne de caractères (string)
var vacances = "2017";
var destination = "Australie";

//--2. Un nombre entier (integer ou int)
var annee = 2017 ;

//--3. Un nombre décimal (float)
var nombre_a_virgule = -5.32 ;

//--4. Un booléen (boolean = VRAI/FAUX = TRUE/FALSE)
var unBooleen = false;//--true

//--5. Les Constantes

/*la déclaration const. permet de créer une constante accessible uniquement
en lecture. Contrairement à une variable sa valeur ne peut plus être modifiée
par réaffectation plus bas dans le code.
une constante ne peut pes être déclarée à nouveau dans le même script.*/

//-- par convention les constantes sont en majuscules
const PAYS = "france";


//-- typeof permet de connaitre le type de ma variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

//--En JS Les vazriables et les constantes sont auto-typées
// on peut convertir une variable de type NUMBER eb STRING et aussi
//et vice et versa avec les fontions natives de JS

//--la fonction parseInt()renvoie un entier à partir d'une chaîne de caractèriques

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);


//je ré-affecte une valeur
unChiffre ="12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

//STRING => float
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

//NUMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

































//fin
