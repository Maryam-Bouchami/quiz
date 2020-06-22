
let form = document.querySelector("form");
//recuperer l'url de la page
let linkPage = new URL(document.URL);
//récuperer le parametre quiz
var search_params = new URLSearchParams(linkPage.search);
if (search_params.has('quiz')) {
	var parametreQuiz = search_params.get('quiz');
	console.log(parametreQuiz);
}









let url = "http://localhost/data-js/quiz.json";
let elt = document.querySelectorAll(".reponse>input");
ajaxGet(url, function (response) {
	let table = JSON.parse(response);
	switch (parametreQuiz) {
		case "geographie":
			tab = table.geographie;
			console.log(tab[1].reponse);
			break;
		case "histoire":
			tab = table.histoire;
			console.log(tab[1].reponse);
			break;
		case "sciences":
			tab = table.sciences;
			console.log(tab[1].reponse);
			break;
		case "litterature":
			tab = table.litterature;
			console.log(tab[1].reponse);
			break;
		default:
			break;
	}









	let j = 0;
	//gestion de resultat
	scrollTo(0, 0);
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		document.querySelector("input[type=\"submit\"]").style.display = "none";
		document.querySelector("#quiz").insertAdjacentHTML("beforeend", "<button id=\"rejouer\">Refaire le quiz</button> ");
		document.getElementById("rejouer").addEventListener("click", function () {
			window.location.reload(true);

		});
		for (let i = 0; i < elt.length; i++) {

			if (elt[i].checked) {
				let inputID = elt[i].id;
				let label = document.querySelector("label[for=\"" + inputID + "\"]");
				if (label.textContent === tab[j].reponse) {

					label.style.color = "LimeGreen";
				} else {
					label.style.color = "red";
					document.getElementsByClassName("question")[j].insertAdjacentHTML("afterend", "<span class=\"error\">faux: la bonne reponse est " + tab[j].reponse + "</span>");
				}
				j++;
			} else {
				elt[i].disabled = true;

			}
		}








	});

});



//Menu responsive


let icon = document.getElementById("hamburger");
icon.addEventListener("click", function () {

	let menu = document.querySelector(".menu");
	if (getComputedStyle(menu).display === "none") {
		menu.style.display = "flex";
		menu.style.flexDirection = "column";
	} else {
		document.querySelector(".menu").style.display = "none";
	}
});
		
function textShadow(){
	let bigTitle=document.querySelector("h1");
	bigTitle.style.textShadow="white 2px 2px 5px";
	setTimeout(function(){bigTitle.style.textShadow="none";},500);
}
let decoTextTime=setInterval(textShadow,1000);
