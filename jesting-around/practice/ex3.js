//should return a clean string without these symbols: "!", "#", ".", ",", "'"
const simplify = function(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}

module.exports = simplify;