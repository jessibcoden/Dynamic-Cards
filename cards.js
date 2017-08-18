console.log("Dynamic Cards, Boyeee!");

var input = document.getElementById("input");
var createButton = document.getElementById("create-button");
var cardHolder = document.getElementById("card-holder");

var cardz = [];

function cardDom (){
	var cardString = '';
	cardString+=	`<article class="card">`;
	cardString+=		`<section class="text-display">${input.value}</section>`;
	cardString+=		`<button class="delete-button">Delete</button>`;
	cardString+=	`</article>`;
	console.log(cardString);
	writeToDom(cardString);
}

function writeToDom (cardString){
	cardHolder.innerHTML+=cardString;
}

function deleteCard (event){
	console.log(event.currentTarget);



}

createButton.addEventListener("click", cardDom);

cardHolder.addEventListener("click", deleteCard);



// createButton.addEventListener('mouseenter', function() {
// 	cardDom(input); //pass planets (without the z) so it returns all planets
// });





// function displaycardString(){
// 	if(createButton.click){

// 	}

// 	var divToPrint=document.getElementById("printdata");
//         var newWin= window.open();
//         newWin.document.write(divToPrint.innerHTML);
//         newWin.print();
// }