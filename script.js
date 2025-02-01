// Função fatorial
function fatorial(numero) {
  if (numero === 0) return 1; // O fatorial de 0 é 1

  let resultado = 1;
  for (let i = numero; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}

// Exemplos de uso
console.log(fatorial(5)); // Resultado: 120 (5 * 4 * 3 * 2 * 1)
console.log(fatorial(7)); // Resultado: 5040
console.log(fatorial(0)); // Resultado: 1
console.log(fatorial(1)); // Resultado: 1
