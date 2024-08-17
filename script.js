const replacementRules = {
    'p’m': "2",
    't’n': "4",
    'k’n': "#",
    'hng': "O",
    'pm': "1",
    'bm': "B",
    'hm': "M",
    'tn': "3",
    'dn': "D",
    'hn': "N",
    'hr': "R",
    'hl': "L",
    'dz': "Z",
    'c’': "C",
    's’': "S",
    'ch’': "6",
    'ch': "5",
    'j': "J",
    'sh’': "8",
    'sh': "7",
    'zh': "j",
    'k’': "K",
    'kn': "9",
    'gn': "G",
    'ng': "o",
    'gh': "%",
    'ia': "ya",
    'ai': "ay",
    'ua': "wa",
    'au': "aw",
    'ie': "ye",
    'ei': "ey",
    'ue': "we",
    'eu': "ew",
    'iú': "yu",
    'úi': "uy",
    'uí': "wi",
    'íu': "iw",
};

function replaceText() {
    let inputText = document.getElementById("inputText").value;
    let replacedText = inputText;

    // 置換ルールを長さでソート（長いキーが先に適用されるようにする）
    const sortedRules = Object.keys(replacementRules).sort((a, b) => b.length - a.length);
    sortedRules.forEach(key => {
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        replacedText = replacedText.replace(regex, replacementRules[key]);
    });

    document.getElementById("output").innerText = replacedText;
}

