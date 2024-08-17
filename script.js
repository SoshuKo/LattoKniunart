const replacementRules = {
    's': '$',
    "p’": "P",
    "pm": "1",
    "bm": "B",
    "p’m": "2",
    "hm": "M",
    "t’": "T",
    "tn": "3",
    "dn": "D",
    "t’n": "4",
    "hn": "N",
    "hr": "R",
    "hl": "L",
    "dz": "Z",
    "c’": "C",
    "s’": "S",
    "ch": "5",
    "j": "J",
    "ch’": "6",
    "sh": "7",
    "zh": "j",
    "sh’": "8",
    "k’": "K",
    "kn": "9",
    "gn": "G",
    "k’n": "#",
    "hng": "O",
    "ng": "o",
    "gh": "%"
};

function replaceText() {
    let inputText = document.getElementById("inputText").value;
    let replacedText = inputText;

    for (let key in replacementRules) {
        replacedText = replacedText.split(key).join(replacementRules[key]);
    }

    document.getElementById("output").innerText = replacedText;
}
