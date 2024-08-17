const replacementRules = {
    's': '$',
    "p’m": "2",
    "p’": "P",
    "pm": "1",
    "bm": "B",
    "hm": "M",
    "t’n": "4",
    "tn": "3",
    "t’": "T",
    "dn": "D",
    "hn": "N",
    "hr": "R",
    "hl": "L",
    "dz": "Z",
    "c’": "C",
    "s’": "S",
    "ch’": "6",
    "ch": "5",
    "j": "J",
    "sh’": "8",
    "sh": "7",
    "zh": "j",
    "k’n": "#",
    "kn": "9",
    "k’": "K",
    "gn": "G",
    "hng": "O",
    "ng": "o",
    "gh": "%"
};

function replaceText() {
    let inputText = document.getElementById("inputText").value;
    let replacedText = inputText;

    const sortedRules = Object.keys(replacementRules).sort((a, b) => b.length - a.length);
    sortedRules.forEach(key => {
        replacedText = replacedText.split(key).join(replacementRules[key]);
    });

    document.getElementById("output").innerText = replacedText;
}
