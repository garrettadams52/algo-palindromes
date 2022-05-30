exports.palindrome = function(word) {

    if(typeof(word)=== 'number')
        word = word.toString()

let temp = word.replace(/\W+/g,'').toLowerCase().split('').reverse().join('')
word = word.replace(/\W/g,'').toLowerCase()


if(temp === word)
    return true

return false
};

