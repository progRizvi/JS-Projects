const copyText = document.getElementById("copyText");
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(copyText.value);
	alert("Copied to clipboard!");
});

// Paste text from clipboard

const pasteText = document.getElementById("pasteText");
const pasteBtn = document.getElementById("pasteBtn");
pasteBtn.addEventListener("click", () => {
	navigator.clipboard.readText().then((text) => {
		pasteText.value = text;
	});
});

// Cut text from clipboard

const cutText = document.getElementById("cutText");
const cutBtn = document.getElementById("cutBtn");
cutBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(cutText.value);
	cutText.value = "";
});
