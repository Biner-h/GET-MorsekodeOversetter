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

updateView();
function updateView() {
    app.innerHTML = /*html*/ `
            Skriv her og oversett til morsekode:
        <input type="text" onchange="oversetter(this)"> 
        <div class="textClass">
       
        ${ordFraInput} 
        <p>${ordSomErOversatt}</p>
        </div>
    `;
}

function oversetter(fraInput) {
    ordFraInput = fraInput.value.toUpperCase();
    for (letter of fraInput.value) {
        let enkeltOrdFraInput = ord;
        let ordIndex = alfabet.indexOf(enkeltOrdFraInput);
        ordOversattTilMorsekode += morsekode[ordIndex] + " ";
    }
    updateView();
    ordOversattTilMorsekode = " ";
}
