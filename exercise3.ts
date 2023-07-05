function smallestSubarrayWithSum(arr: number[], S: number): number[] {
  let minLength = Infinity;   // Almacenar la longitud mínima del subarreglo
  let windowSum = 0;          // Almacenar la suma actual de los elementos en la ventana
  let windowStart = 0;        // Indicar el inicio de la ventana
  let subarray: number[] = []; // Almacenar el subarreglo más pequeño encontrado

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];  // Agregar el elemento al final de la ventana

    while (windowSum >= S) {
        if (windowEnd - windowStart + 1 < minLength) {
        minLength = windowEnd - windowStart + 1; // Actualizar la longitud mínima
        subarray = arr.slice(windowStart, windowEnd + 1); // Actualizar el subarreglo más pequeño
      } 

      windowSum -= arr[windowStart]; // Retirar el elemento del inicio de la ventana
      windowStart++;                  // Mover el inicio de la ventana hacia adelante
    }
  }

  return subarray;  // Devolver el subarreglo más pequeño encontrado
}

//Agregar valores para su uso.
const arr: number[] = [2, 1, 5, 2, 3, 2];
const S: number = 7;
const result: number[] = smallestSubarrayWithSum(arr, S);
console.log(`El subarreglo más pequeño es ${result.length} cuya suma es mayor o igual a ${S}: ${result}`);

