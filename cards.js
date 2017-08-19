console.log("Dynamic Cards, Boyeee!");

//Store HTML Dom elements in variables
var input = document.getElementById("input");
var createButton = document.getElementById("create-button");
var cardHolder = document.getElementById("card-holder");

//Create domString
function cardDom (){
	var cardString = '';
	cardString+=	`<article class="card">`;
	cardString+=		`<section class="text-display">${input.value}</section>`;//{input.value} grabs content of textarea with id="input"
	cardString+=		`<button class="delete-button">Delete</button>`;
	cardString+=	`</article>`;
	console.log(cardString);
	writeToDom(cardString);//calls writeToDom function written below
	input.value = "";//clears textarea when a card is written to Dom
}

//add event listener to element with id="create-button" - when button is clicked, it invokes the cardDom function creating a card
createButton.addEventListener("click", cardDom);

//Create function to insert cardString into the cardHolder Dom element
function writeToDom (cardString){
	cardHolder.innerHTML+=cardString;
}

//add event listener to cardHolder b/c the delete button does not exist on the page when it first loads (parent elements can listen for events on all it's children but children cannot listen for events on parent elements)
cardHolder.addEventListener("click", deleteCard);

//create delete button functionality
function deleteCard (event){
	console.log(event);//consoles mouseevent to use to five into to find target and class name
	if(event.target.className === "delete-button"){//Mouseevent (or "click") is the event, and "delete-button" is the class assigned to the delete button
		event.target.parentNode.remove();//event is the mouse event that occurs when the delete button is clicked which then targets the parent of the delete button and removes it
	}
}
