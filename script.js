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
    'zhl': "__zhl__",  // プレースホルダーに置換
    'zhr': "__zhr__",  // プレースホルダーに置換
    'zh': "__zh__",    // プレースホルダーに置換
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
    'j': "J",  // 通常の j の置換はそのまま
    // プレースホルダーを元に戻す
    '__zhl__': "jl",
    '__zhr__': "jr",
    '__zh__': "j",
};

function replaceText() {
    let inputText = document.getElementById("inputText").value;
    let replacedText = inputText;

    // 置換ルールをキーの長さでソート（長いキーが先に適用されるようにする）
    const sortedRules = Object.keys(replacementRules).sort((a, b) => b.length - a.length);
    
    sortedRules.forEach(key => {
        // アポストロフィなどの特殊文字を含むキーを正規表現としてエスケープ
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        replacedText = replacedText.replace(regex, replacementRules[key]);
    });

    document.getElementById("output").innerText = replacedText;
}
