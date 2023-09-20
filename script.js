//Model
let app = document.getElementById("app");
let alfabet = "abcdefghijklmnopqrstuvwxyz æøå";
let morsekode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
    " ",
    "·−·−",
    "−−−·",
    "·−−·−",
];
let ordFraInput = " ";
let ordSomErOversatt = " ";
let text = "";

//View
updateView();
function updateView() {
    app.innerHTML = /*html*/ `
        <div class="text">Skriv her og oversett til morsekode:</div>
        <input class="input" type="text" onchange="text = this.value"> 
        <button class="knapp" onclick="translateText(text)">Oversett</button>
        <div class="answer">
            <p>${ordFraInput}</p> 
            <p>${ordSomErOversatt}</p>
        </div>
    `;
}

//Controller
function translateText(fraInput) {
    ordSomErOversatt = "";
    ordFraInput = fraInput.toLowerCase();
    for (letter of ordFraInput) {
        let letterIndex = alfabet.indexOf(letter);
        ordSomErOversatt += morsekode[letterIndex] + " ";
    }
    updateView();
}
