const crypto = require('crypto');

function sum(a,b) {
    return a+b
}
function sub(a,b) {
    return a-b
}
function mult(a,b) {
    return a*b
}
function divide(a,b) {
    return a/b
}
function sin(a) {
    return Mat.sin(a)
}
function cos(a) {
    return Mat.cos(a)
}
function tan(a) {
    return Mat.tan(a)
}
function random(length = 8) {
    let x =crypto.randomBytes(length).toString('hex');
    return x
}

module.exports = {sum,sub,mult,divide,sin,cos,tan,random}