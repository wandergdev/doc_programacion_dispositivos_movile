function shortestDist(frase: string, count: string): number[] {
  const distances: number[] = [];
  const indices: number[] = []; // Almacenar los índices de aparición del carácter count

  // Obtener todos los índices de aparición del carácter count
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === count) {
      indices.push(i);
    }
  }

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === count) {
      distances.push(0); // Si el carácter es igual a count, la distancia es 0
    } else {
      let minDistance = Number.MAX_VALUE;

      // Calcular la distancia mínima entre el carácter y count
      for (let j = 0; j < indices.length; j++) {
        const distance = Math.abs(i - indices[j]);
        minDistance = Math.min(minDistance, distance);
      }

      distances.push(minDistance);
    }
  }

  return distances;
}

//Agregar valores para su uso.
const frase = 'hola mundo';
const count = 'a';

const distances = shortestDist(frase, count);

console.log('Frase:', frase); // Imprimir la frase
console.log('Distancias:', distances.join(' ')); // Imprimir las distancias separadas por espacio
