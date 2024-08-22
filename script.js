const replacementRules = {
    'p’m': "2",
    'p’r': "Pr",
    'p’l': "Pl",
    't’n': "4",
    't’r': "Tr",
    't’l': "Tl",
    'k’n': "#",
    'hng': "O",
    'chl': "5l",
    'chr': "5r",
    'shl': "7l",
    'shr': "7r",  
    'zh': "V",
    'ghl': "%l",
    'ghr': "%r",
    'p’': "P",
    't’': "T",
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
    'j': "J",  // 通常の j の置換はそのまま
    'sh’': "8",
    'sh': "7",
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
    'V': "j"
};

const replacementRules = {
    // 置換ルール（省略）
    // 必要に応じてここにルールを追加してください
};

function replaceText() {
    let inputText = document.getElementById("inputText").value;
    let replacedText = inputText;

    // 置換ルールをキーの長さでソート（長いキーが先に適用されるようにする）
    const sortedRules = Object.keys(replacementRules).sort((a, b) => b.length - a.length);
    
    sortedRules.forEach(key => {
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        replacedText = replacedText.replace(regex, replacementRules[key]);
    });

    const selectedFont = document.getElementById("fontSelect").value;
    const outputDiv = document.getElementById("output");
    
    outputDiv.style.fontFamily = selectedFont;
    outputDiv.innerText = replacedText;
}
