function printSection(section = "no section", content = "no content"){
	const str_break = "--------------------------------------------------\n";
	const ret_val = str_break + section + '\n' + str_break + content;
	console.log(ret_val);
}
printSection("javascript started")

// ========================================================================

// this needs to be manually enabled
function setCookie(name, value, days=7) {
	let expires = "";
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}
function getCookie(name) {
	let cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i].trim();
		if (cookie.startsWith(name + "=")) {
			return cookie.substring((name + "=").length);
		}
	}
	return null;	// returns null if no cookie of the specified name is found
}


// ========================================================================

const elementTextAreaPeople = document.getElementById("listPeople");

async function ShuffleBehavior(){
	
	localStorage.setItem('listPeople', elementTextAreaPeople.value);
	console.log(localStorage.listPeople)

	const peopleList = elementTextAreaPeople.value
	.trim()
	.split(/\s+/);
	const peopleListShuffled = peopleList.sort(() => Math.random() - 0.5);
	
	for(index in peopleListShuffled){
		document.getElementById(
			"player" + String(Number(index)+1).padStart(2, "0")
		).value = peopleListShuffled[index];
	}
}
function initShuffleBehavior(){
	const listPeople = localStorage.listPeople;
	printSection("initShuffleBehavior", content = listPeople);
	elementTextAreaPeople.value = listPeople;

	// shuffle initializtion
	const elementButtonShuffle = document.getElementById('buttonShuffle');
	elementButtonShuffle.addEventListener('click', ShuffleBehavior);
}
initShuffleBehavior()

// ========================================================================

function initSelect(){
	document.getElementById("select01").selectedIndex = 0;
	document.getElementById("select02").selectedIndex = 0;
	document.getElementById("select03").selectedIndex = 1;
	document.getElementById("select04").selectedIndex = 1;
	document.getElementById("select05").selectedIndex = 2;
	document.getElementById("select06").selectedIndex = 2;
	document.getElementById("select07").selectedIndex = 3;
	document.getElementById("select08").selectedIndex = 3;
	document.getElementById("select09").selectedIndex = 4;
	document.getElementById("select10").selectedIndex = 4;
}
initSelect()

