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
// INITIALIZE TEXT AREA
// ========================================================================

const elementTextAreaSituation = document.getElementById("situation");
const elementTextAreaAutomaticThought = document.getElementById("automatic_thought");
const elementTextAreaEmotion = document.getElementById("emotion");
const elementTextAreaEvidenceFor = document.getElementById("evidence_for");
const elementTextAreaEvidenceAgainst = document.getElementById("evidence_against");
const elementTextAreaBalancedThought = document.getElementById("balanced_thought");

const listElementTextArea = [
	elementTextAreaSituation,
	elementTextAreaAutomaticThought,
	elementTextAreaEmotion,
	elementTextAreaEvidenceFor,
	elementTextAreaEvidenceAgainst,
	elementTextAreaBalancedThought
];

for (let i = 0; i < listElementTextArea.length; i++) {
	// set text area on start
	const saved = localStorage.getItem('elementTextArea' + i);
	if (saved !== null) {
		listElementTextArea[i].value = saved;
	}
}

for (let i = 0; i < listElementTextArea.length; i++) {
	// on edit, save to local storage
	(listElementTextArea[i]).addEventListener("input", function () {
		localStorage.setItem('elementTextArea'+String(i), (listElementTextArea[i]).value)
	});
}

// ========================================================================
// INITIALIZE CLEAR
// ========================================================================

const buttonClear = document.getElementById("buttonClear");
buttonClear.addEventListener("click", function () {
	for (let i = 0; i < listElementTextArea.length; i++) {
		(listElementTextArea[i]).value = ""
		localStorage.setItem('elementTextArea'+String(i), "")
	}
});

// ========================================================================
// INITIALIZE CLEAR
// ========================================================================

const buttonExport = document.getElementById("buttonExport");
buttonExport.addEventListener("click", function () {
	const jsonData = {
		Situation: String(elementTextAreaSituation.value),
		AutomaticThought: String(elementTextAreaAutomaticThought.value),
		Situation: String(elementTextAreaSituation.value),
		Emotion: String(elementTextAreaEmotion.value),
		EvidenceFor: String(elementTextAreaEvidenceFor.value),
		EvidenceAgainst: String(elementTextAreaEvidenceAgainst.value),
		BalancedThought: String(elementTextAreaBalancedThought.value),
	};
	const a = document.createElement("a");
	const file = new Blob([JSON.stringify(jsonData)], { type: "text/plain" });
	a.href = URL.createObjectURL(file);
	a.download = "file.json";
	a.click();
});