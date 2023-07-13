import * as emoji from 'node-emoji';

(function (global) {
    function replaceEmoji(sentence) {
        return sentence.split(' ').map((word) => emoji.has(word) ? emoji.get(word) : word).join('');
    }

    global.emojify = emoji.emojify;
    global.unemojify = emoji.unemojify;
    global.hasEmoji = emoji.has;
    global.getEmoji = emoji.get;
    global.getEmoji = emoji.get;
    global.whichEmoji = emoji.which;
    global.searchEmoji = emoji.search;
    global.stripEmoji = emoji.strip;
    global.randomEmoji = emoji.random;
    global.replaceSpecificEmoji = emoji.replace;
    global.replaceEmoji = replaceEmoji;
})(window);