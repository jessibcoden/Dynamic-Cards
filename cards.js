console.log("Dynamic Cards, Boyeee!");

var input = document.getElementById("input");
var createButton = document.getElementById("create-button");

var cardz = [];

function cardDom (input){
	var cardString = '';
	for(var i=0; i<cardz.length; i++){
		var newCard = '';
		newCard+=`<div id="card-holder">`;
		newCard+=	`<article id="card">`;
		newCard+=		`<section class="text-display">${input}</section>`;
		// newCard+=		`<button class="delete-button">${deleteCard}</button>`;
		newCard+=	`</article>`;
		newCard+=`</div>`;

		cardString += newCard;
	}
	writeToDom(cardString);
	console.log("cardString", cardString);
}

// createButton.addEventListener('mouseenter', function() {
// 	cardDom(input); //pass planets (without the z) so it returns all planets
// });





// function displayNewCard(){
// 	if(createButton.click){

// 	}

// 	var divToPrint=document.getElementById("printdata");
//         var newWin= window.open();
//         newWin.document.write(divToPrint.innerHTML);
//         newWin.print();
// }