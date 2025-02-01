// Função reverterString
function reverterString(texto) {
  return texto.split("").reverse().join("");
}

// Exemplos de uso
console.log(reverterString("JavaScript")); // Resultado: "tpircSavaJ"
console.log(reverterString("Olá, mundo!")); // Resultado: "!odnum ,álO"
console.log(reverterString("12345")); // Resultado: "54321"
console.log(reverterString("a")); // Resultado: "a"
console.log(reverterString("")); // Resultado: ""
