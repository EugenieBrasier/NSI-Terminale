var questions_facile;
var id_questions_facile;
var questions_moyen;
var id_questions_moyen;
var questions_difficile;
var id_questions_difficile;

var div_question;
var div_reponseA;
var div_triangle_A1;
var div_triangle_A2;
var div_reponseB;
var div_triangle_B1;
var div_triangle_B2;
var div_reponseC;
var div_triangle_C1;
var div_triangle_C2;
var div_reponseD;
var div_triangle_D1;
var div_triangle_D2;
var div_hover;
var bouton;
var div_message;

var div_niveau;
var id_niveau = "niveau0";

var niveau;
var question;
var reponse;

var clicked;

function charger_questions_facile() {

	// On charge le fichier CSV
    $.get("./ressources/questions/questions_facile.csv", function(fichier) {
        
    	// Nombre d'elements dans une ligne
        var nb_colonnes = 7; 

        // On separe le fichier en lignes
	    var lignes = fichier.split('\n');

	    // On recupere les titres des colonnes
	    var titres_colonnes = lignes[0].split(';');

	    // On cree une liste des lignes restantes
	    questions_facile = [];

	    // On separe les lignes
	    for(var x = 0; x < lignes.length; x++){
	    	var d = {}
	    	var question = lignes[x].split(';');
	    	d["question"] = question[1];
	    	d["A"] = question[2];
	    	d["B"] = question[3];
	    	d["C"] = question[4];
	    	d["D"] = question[5];
	    	d["reponse"] = question[6];
	    	questions_facile.push(d);
	    }

	    shuffleArray(questions_facile);
    });
}

function charger_questions_moyen() {
	// On charge le fichier CSV
    $.get("./ressources/questions/questions_moyen.csv", function(fichier) {
        
    	// Nombre d'elements dans une ligne
        var nb_colonnes = 7; 

        // On separe le fichier en lignes
	    var lignes = fichier.split('\n');

	    // On recupere les titres des colonnes
	    var titres_colonnes = lignes[0].split(';');

	    // On cree une liste des lignes restantes
	    questions_moyen = [];

	    // On separe les lignes
	    for(var x = 0; x < lignes.length; x++){
	    	var d = {}
	    	var question = lignes[x].split(';');
	    	d["question"] = question[1];
	    	d["A"] = question[2];
	    	d["B"] = question[3];
	    	d["C"] = question[4];
	    	d["D"] = question[5];
	    	d["reponse"] = question[6];
	    	questions_moyen.push(d);
	    }

	    shuffleArray(questions_moyen);
    });
}

function charger_questions_difficile() {
	// On charge le fichier CSV
    $.get("./ressources/questions/questions_difficile.csv", function(fichier) {
        
    	// Nombre d'elements dans une ligne
        var nb_colonnes = 7; 

        // On separe le fichier en lignes
	    var lignes = fichier.split('\n');

	    // On recupere les titres des colonnes
	    var titres_colonnes = lignes[0].split(';');

	    // On cree une liste des lignes restantes
	    questions_difficile = [];

	    // On separe les lignes
	    for(var x = 0; x < lignes.length; x++){
	    	var d = {}
	    	var question = lignes[x].split(';');
	    	d["question"] = question[1];
	    	d["A"] = question[2];
	    	d["B"] = question[3];
	    	d["C"] = question[4];
	    	d["D"] = question[5];
	    	d["reponse"] = question[6];
	    	questions_difficile.push(d);
	    }

	    shuffleArray(questions_difficile);
    });
}

function initialiser_jeu() {

	// On charge les questions
	charger_questions_facile();
	charger_questions_moyen();
	charger_questions_difficile();

	// On associe les elements html
    associer_html();

    // On reinitialise les variables globales
    reinitialiser();

    // On gere les evenements
    associer_evenements();
}

function reinitialiser(){
	clicked = 0;
	niveau = 0;
	id_questions_facile = 0;
	id_questions_moyen = 0;
	id_questions_difficile = 0;
}

function associer_html(){
	div_question = document.getElementById("question_centre");
	div_reponseA = document.getElementById("reponseA");
	div_triangle_A1 = document.getElementById("A").getElementsByClassName("triangle2")[0];
	div_triangle_A2 = document.getElementById("A").getElementsByClassName("triangle2")[1];
	div_reponseB = document.getElementById("reponseB");
	div_triangle_B1 = document.getElementById("B").getElementsByClassName("triangle2")[0];
	div_triangle_B2 = document.getElementById("B").getElementsByClassName("triangle2")[1];
	div_reponseC = document.getElementById("reponseC");
	div_triangle_C1 = document.getElementById("C").getElementsByClassName("triangle2")[0];
	div_triangle_C2 = document.getElementById("C").getElementsByClassName("triangle2")[1];
	div_reponseD = document.getElementById("reponseD");
	div_triangle_D1 = document.getElementById("D").getElementsByClassName("triangle2")[0];
	div_triangle_D2 = document.getElementById("D").getElementsByClassName("triangle2")[1];
	div_hover = document.getElementById("hover");
	bouton = document.getElementsByTagName("button")[0]; 
	div_message = document.getElementById('message');

	div_niveau = document.getElementById(id_niveau);
}

function shuffleArray(array) {
	// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function verifier_reponse(choix){
	switch(reponse){
		case "A" :
			div_reponseA.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			div_triangle_A1.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			div_triangle_A2.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			break;
		case "B" :
			div_reponseB.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			div_triangle_B1.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			div_triangle_B2.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			break;
		case "C" :
			div_reponseC.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			div_triangle_C1.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			div_triangle_C2.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			break;
		case "D" :
			div_reponseD.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			div_triangle_D1.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			div_triangle_D2.style = "background:green;animation-name:ok;animation-duration:1s;animation-iteration-count: 4;";
			break;
	}

	if(choix == reponse){
		niveau++;

		if(niveau == 15){
			div_message.style = "display:flex;";
			div_message.innerHTML = "Vous gagnez 4₿ !";
			niveau = 0;
		}
	}
	else{
		switch(choix){
			case "A" :
				div_reponseA.style = "background:orange;";
				div_triangle_A1.style = "background:orange;";
				div_triangle_A2.style = "background:orange;";
				break;
			case "B" :
				div_reponseB.style = "background:orange;";
				div_triangle_B1.style = "background:orange;";
				div_triangle_B2.style = "background:orange;";
				break;
			case "C" :
				div_reponseC.style = "background:orange;";
				div_triangle_C1.style = "background:orange;";
				div_triangle_C2.style = "background:orange;";
				break;
			case "D" :
				div_reponseD.style = "background:orange;";
				div_triangle_D1.style = "background:orange;";
				div_triangle_D2.style = "background:orange;";
				break;
		}
		div_message.style = "display:flex;";
		if (niveau >= 10){
			div_message.innerHTML = "Vous gagnez 3₿ !";
		} else if (niveau >= 5){
			div_message.innerHTML = "Vous gagnez 2₿ !";
		} else {
			div_message.innerHTML = "Perdu !";
		}
		niveau = 0;
	}

	if(div_niveau.className == "palier"){
		div_niveau.style = "background:orange; color: black; border: solid 2px black;";
	} else {
		div_niveau.style = "background:white; color: black; border: solid 2px black;";
	}
	
	id_niveau = "niveau" + niveau.toString();
	div_niveau = document.getElementById(id_niveau);
	div_niveau.style = "background:black; color: white; border: solid 4px white;";

	
	setTimeout(func => {
		clicked = 0;
		div_hover.style = "display:flex;"}, 4000);
}

function selectionner_reponse(choix){
	setTimeout(verifier_reponse, 3000, choix);
	clicked = 1;
}

function associer_evenements(){
	div_reponseA.addEventListener("click", evenement => {
		if(clicked == 0){
			div_reponseA.style = "background:white; color:black;";
			div_triangle_A1.style = "background:white; color:black;";
			div_triangle_A2.style = "background:white; color:black;";
			selectionner_reponse("A");
		}
	});
	div_reponseA.addEventListener("mouseover", evenement => {
		if(clicked == 0){
			div_reponseA.style = "background:lightblue; color:black;";
			div_triangle_A1.style = "background:lightblue; color:black;";
			div_triangle_A2.style = "background:lightblue; color:black;";
		}
	});
	div_reponseA.addEventListener("mouseout", evenement => {
		if(clicked == 0){
			div_reponseA.style = "background:blue; color:white;";
			div_triangle_A1.style = "background:blue; color:white;";
			div_triangle_A2.style = "background:blue; color:white;";
		}
	});

	div_reponseB.addEventListener("click", evenement => {
		if(clicked == 0){
			div_reponseB.style = "background:white; color:black;";
			div_triangle_B1.style = "background:white; color:black;";
			div_triangle_B2.style = "background:white; color:black;";
			selectionner_reponse("B");
		}
	});
	div_reponseB.addEventListener("mouseover", evenement => {
		if(clicked == 0){
			div_reponseB.style = "background:lightblue; color:black;";
			div_triangle_B1.style = "background:lightblue; color:black;";
			div_triangle_B2.style = "background:lightblue; color:black;";
		}
	});
	div_reponseB.addEventListener("mouseout", evenement => {
		if(clicked == 0){
			div_reponseB.style = "background:blue; color:white;";
			div_triangle_B1.style = "background:blue; color:white;";
			div_triangle_B2.style = "background:blue; color:white;";
		}
	});

	div_reponseC.addEventListener("click", evenement => {
		if(clicked == 0){
			div_reponseC.style = "background:white; color:black;";
			div_triangle_C1.style = "background:white; color:black;";
			div_triangle_C2.style = "background:white; color:black;";
			selectionner_reponse("C");
		}
	});
	div_reponseC.addEventListener("mouseover", evenement => {
		if(clicked == 0){
			div_reponseC.style = "background:lightblue; color:black;";
			div_triangle_C1.style = "background:lightblue; color:black;";
			div_triangle_C2.style = "background:lightblue; color:black;";
		}
	});
	div_reponseC.addEventListener("mouseout", evenement => {
		if(clicked == 0){
			div_reponseC.style = "background:blue; color:white;";
			div_triangle_C1.style = "background:blue; color:white;";
			div_triangle_C2.style = "background:blue; color:white;";
		}
	});

	div_reponseD.addEventListener("click", evenement => {
		if(clicked == 0){
			div_reponseD.style = "background:white; color:black;";
			div_triangle_D1.style = "background:white; color:black;";
			div_triangle_D2.style = "background:white; color:black;";
			selectionner_reponse("D");
		}
	});
	div_reponseD.addEventListener("mouseover", evenement => {
		if(clicked == 0){
			div_reponseD.style = "background:lightblue; color:black;";
			div_triangle_D1.style = "background:lightblue; color:black;";
			div_triangle_D2.style = "background:lightblue; color:black;";
		}
	});
	div_reponseD.addEventListener("mouseout", evenement => {
		if(clicked == 0){
			div_reponseD.style = "background:blue; color:white;";
			div_triangle_D1.style = "background:blue; color:white;";
			div_triangle_D2.style = "background:blue; color:white;";
		}
	});
	bouton.addEventListener("click", evenement => {
		afficher_nouvelle_question();
	});
}

function afficher_nouvelle_question(){

	if(niveau < 5){
		id_questions_facile++;
		div_question.innerHTML = questions_facile[id_questions_facile]["question"];
		div_reponseA.innerHTML = questions_facile[id_questions_facile]["A"];
		div_reponseB.innerHTML = questions_facile[id_questions_facile]["B"];
		div_reponseC.innerHTML = questions_facile[id_questions_facile]["C"];
		div_reponseD.innerHTML = questions_facile[id_questions_facile]["D"];
		reponse = questions_facile[id_questions_facile]["reponse"];
	} else if(niveau < 11){
		id_questions_moyen++;
		div_question.innerHTML = questions_moyen[id_questions_moyen]["question"];
		div_reponseA.innerHTML = questions_moyen[id_questions_moyen]["A"];
		div_reponseB.innerHTML = questions_moyen[id_questions_moyen]["B"];
		div_reponseC.innerHTML = questions_moyen[id_questions_moyen]["C"];
		div_reponseD.innerHTML = questions_moyen[id_questions_moyen]["D"];
		reponse = questions_moyen[id_questions_moyen]["reponse"];
	} else {
		id_questions_difficile++;
		div_question.innerHTML = questions_difficile[id_questions_difficile]["question"];
		div_reponseA.innerHTML = questions_difficile[id_questions_difficile]["A"];
		div_reponseB.innerHTML = questions_difficile[id_questions_difficile]["B"];
		div_reponseC.innerHTML = questions_difficile[id_questions_difficile]["C"];
		div_reponseD.innerHTML = questions_difficile[id_questions_difficile]["D"];
		reponse = questions_difficile[id_questions_difficile]["reponse"];
	}

	div_reponseA.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_triangle_A1.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_triangle_A2.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_reponseB.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_triangle_B1.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_triangle_B2.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_reponseC.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_triangle_C1.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_triangle_C2.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_reponseD.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_triangle_D1.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";
	div_triangle_D2.style = "background:blue;animation-name:none;animation-duration:1s;animation-iteration-count: 4;";

	div_hover.style = "display:none;";
	div_message.style = "display: none;"
}

window.addEventListener("load", evenement => {

	$(document).ready(function(){
		// Chargement des questions
	    $.when(initialiser_jeu()).then(fun => {
		    // On demarre le jeu
		    afficher_nouvelle_question();
	    })
	})
});