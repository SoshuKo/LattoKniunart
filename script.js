const replacementRules = [
    ['p’m', "__REPLACED_2__"],
    ['p’r', "__REPLACED_Pr__"],
    ['p’l', "__REPLACED_Pl__"],
    ['t’n', "__REPLACED_4__"],
    ['t’r', "__REPLACED_Tr__"],
    ['t’l', "__REPLACED_Tl__"],
    ['k’n', "__REPLACED_#__"],
    ['hng', "__REPLACED_O__"],
    ['chl', "__REPLACED_5l__"],
    ['chr', "__REPLACED_5r__"],
    ['shl', "__REPLACED_7l__"],
    ['shr', "__REPLACED_7r__"],
    ['zhl', "__REPLACED_jl__"],  
    ['zhr', "__REPLACED_jr__"],  
    ['zh', "__REPLACED_j__"],    
    ['ghl', "__REPLACED_%l__"],
    ['ghr', "__REPLACED_%r__"],
    ['p’', "__REPLACED_P__"],
    ['t’', "__REPLACED_T__"],
    ['pm', "__REPLACED_1__"],
    ['bm', "__REPLACED_B__"],
    ['hm', "__REPLACED_M__"],
    ['tn', "__REPLACED_3__"],
    ['dn', "__REPLACED_D__"],
    ['hn', "__REPLACED_N__"],
    ['hr', "__REPLACED_R__"],
    ['hl', "__REPLACED_L__"],
    ['dz', "__REPLACED_Z__"],
    ['c’', "__REPLACED_C__"],
    ['s’', "__REPLACED_S__"],
    ['ch’', "__REPLACED_6__"],
    ['ch', "__REPLACED_5__"],
    ['sh’', "__REPLACED_8__"],
    ['sh', "__REPLACED_7__"],
    ['k’', "__REPLACED_K__"],
    ['kn', "__REPLACED_9__"],
    ['gn', "__REPLACED_G__"],
    ['ng', "__REPLACED_o__"],
    ['gh', "__REPLACED_%__"],
    ['ia', "__REPLACED_ya__"],
    ['ai', "__REPLACED_ay__"],
    ['ua', "__REPLACED_wa__"],
    ['au', "__REPLACED_aw__"],
    ['ie', "__REPLACED_ye__"],
    ['ei', "__REPLACED_ey__"],
    ['ue', "__REPLACED_we__"],
    ['eu', "__REPLACED_ew__"],
    ['iú', "__REPLACED_yu__"],
    ['úi', "__REPLACED_uy__"],
    ['uí', "__REPLACED_wi__"],
    ['íu', "__REPLACED_iw__"],
    ['j', "__REPLACED_J__"]
];

function replaceText() {
    let inputText = document.getElementById("inputText").value;
    let replacedText = inputText;

    // すべての置換を一時的なプレースホルダーで行う
    replacementRules.forEach(([key, value]) => {
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        replacedText = replacedText.replace(regex, value);
    });

    // 一時的なプレースホルダーを最終的な文字に置換
    replacementRules.forEach(([key, value]) => {
        replacedText = replacedText.replace(new RegExp(value, 'g'), value.replace('__REPLACED_', '').replace('__', ''));
    });

    document.getElementById("output").innerText = replacedText;
}
