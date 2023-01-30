var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const f = lines.shift().split(' ');
var n = f[0], s = parseInt(f[1]);
var min = s;

for (var i = 0; i < n; i++) {
    s += parseInt(lines.shift());
    if (min > s) {
        min = s;
    }
}

console.log(min);