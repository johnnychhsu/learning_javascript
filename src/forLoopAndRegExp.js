var zh = require("./tranditional-chinese")

var keys = [
    ["apple", "蘋果"]
]

var test = "我 有 一顆 apple"

function process(sentence) {
    keys.forEach(function(key) {
        var re = new RegExp("\\b" + key[0] + "\\b", "g");
        if(sentence.match(re))
            sentence = sentence.replace(key[0], key[1]);
    });
}
