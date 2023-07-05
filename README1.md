# Wander Roberto Genao De Jesús

# 2020-0164

## TypeScrip Interview

## Ejercicio #1

Este problema fue pedido por Amazon.

Existe una escalera con N escalones, y puedes subir 1 o 2 escalones a la vez. Dado N, escribe una función que devuelva el número de formas únicas en que puedes subir la escalera. El orden de los pasos importa.

Por ejemplo, si N es 4, entonces hay 5 formas únicas:

1, 1, 1, 1

2, 1, 1

1, 2, 1

1, 1, 2

2, 2

¿Qué pasaría si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier número de un conjunto de enteros positivos X? Por ejemplo, si X = {1, 3, 5}, podrías subir 1, 3 o 5 escalones a la vez.

Realiza un programa en Typescript que imprima por consola las formas únicas de subir las escaleras.

```typescript
function uniqueWaysToClimbStairs(N: number, steps: number[]): void {
    const dp: number[] = Array(N + 1).fill(0); // Arreglo para almacenar los resultados de las formas únicas
    const combinations: any[][] = Array(N + 1).fill([]); // Arreglo para almacenar las formas posibles

    dp[0] = 1; // Hay una única forma de subir 0 escalones, que es no subir ningún escalón
    combinations[0] = [[]]; // La forma de subir 0 escalones es no subir ningún escalón

    for (let i = 1; i <= N; i++) {
        for (let j = 0; j < steps.length; j++) {
            if (i >= steps[j]) {
                dp[i] += dp[i - steps[j]]; // Se calcula el número de formas únicas sumando las formas anteriores
                combinations[i] = [
                    ...combinations[i],
                    ...combinations[i - steps[j]].map((comb) => [...comb, steps[j]]) // Se generan las combinaciones posibles
                ];
            }
        }
    }

    console.log(`Número de formas únicas para subir la escalera con ${N} escalones:`);
    console.log(dp[N]); // Se imprime el número de formas únicas

    console.log("Formas posibles:");
    combinations[N].forEach((comb) => console.log(comb)); // Se imprimen lasAgregar valores para su uso.Agregar valores para su uso.es
}

//Agregar valores para su uso.
const N = 4; // Número de escalones
const steps = [1, 2]; // Pasos permitidos

uniqueWaysToClimbStairs(N, steps); // Llamada a la función
```

En el codigo podemos ver algunos comentarios que van explicando que se está realizando, pero aquí veremos una explicacion más detallada. 

tenemos una función llamada `uniqueWaysToClimbStairs` que va a calcular las formas posibles de subir una escalera con N escalones, utilizando una serie de pasos permitidos definidos en el arreglo `steps`.

La función utiliza dos arreglos: `dp` y `combinations`. El arreglo `dp` almacena los resultados de las formas únicas, donde `dp[i]` representa el número de formas únicas de subir `i` escalones. El arreglo `combinations` almacena las formas posibles para cada número de escalones.

Comienza inicializando `dp[0]` en 1, ya que hay una única forma de subir 0 escalones, que es no subir ningún escalón. También se inicializa `combinations[0]` con un arreglo vacío, ya que no hay formas posibles para subir 0 escalones.

Luego, se itera desde 1 hasta `N` (el número de escalones) en un bucle externo. Dentro de este bucle, se itera sobre los elementos del arreglo `steps` en un bucle interno. Para cada `i` y `j`, se verifica si `i` es mayor o igual que `steps[j]`. Si es así, se actualiza `dp[i]` sumando `dp[i - steps[j]]`, lo que significa que se agrega el número de formas únicas que se pueden obtener utilizando el paso `steps[j]`. 

Después de completar los bucles, se imprime el número de formas únicas utilizando `console.log(dp[N])`, donde `N` es el número de escalones dado. Luego, se imprimen todas las formas posibles utilizando `console.log(comb)` para cada combinación en `combinations[N]`.

## Ejercicio #2

Uber preguntó recientemente el problema:

Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena.

Aquí hay un ejemplo y un código de inicio:

distancia_más_corta(s, c)

Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo:

shortest_dist('helloworld', 'l')

h e l l o w o r l d

[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]

0 1 2 3 4 5 6 7 8 9

```typescript
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
```

En este ejercicio se proporciona una función llamada `shortestDist` que calcula las distancias mínimas entre cada carácter de una frase y un carácter objetivo especificado en el parámetro `count`. La función devuelve un arreglo de números que representa las distancias mínimas para cada carácter de la frase.

La función utiliza dos arreglos: `distances` e `indices`. El arreglo `distances` almacena las distancias mínimas calculadas, donde `distances[i]` representa la distancia mínima entre el carácter en la posición `i` de la frase y el carácter objetivo. El arreglo `indices` almacena los índices de aparición del carácter objetivo en la frase.

El algoritmo comienza iterando sobre cada carácter de la frase en un bucle, utilizando el primer bucle `for`. Si el carácter en la posición actual es igual al carácter objetivo (`frase[i] === count`), se agrega 0 al arreglo `distances`, ya que la distancia entre el carácter y sí mismo es 0. Además, se agrega el índice actual al arreglo `indices`.

Si el carácter en la posición actual no es igual al carácter objetivo, se inicializa una variable `minDistance` con un valor máximo posible (`Number.MAX_VALUE`). A continuación, se realiza un segundo bucle `for` para calcular la distancia mínima entre el carácter y el carácter objetivo. En cada iteración, se calcula la distancia absoluta (`Math.abs`) entre la posición actual `i` y cada índice almacenado en `indices`, y se actualiza `minDistance` si se encuentra una distancia menor. 

## Ejercicio #3

Facebook preguntó recientemente el problema: (Slider Window)

Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo

Input: [2, 1, 5, 2, 3, 2], S=7

Output: 2

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2].

Input: [2, 1, 5, 2, 8], S=7

Output: 1

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8].

Nota: No puedes usar ciclos anidados para resolver el problema.

```typescript
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
```

La función `smallestSubarrayWithSum` encuentra el subarreglo más pequeño en un arreglo dado, cuya suma es mayor o igual a un valor objetivo especificado.

El algoritmo utiliza una técnica de ventana deslizante. Comienza con un tamaño de ventana de cero y se va expandiendo hacia la derecha, agregando elementos al cálculo de la suma actual (`windowSum`). Cuando la suma actual supera o alcanza el valor objetivo (`S`), se verifica si el tamaño de la ventana actual es menor que el tamaño mínimo encontrado hasta ahora (`minLength`). Si es así, se actualiza el tamaño mínimo y se guarda el subarreglo correspondiente.

Después de expandir la ventana al máximo posible, si la suma actual sigue siendo mayor o igual al valor objetivo, se intenta reducir el tamaño de la ventana moviendo el inicio hacia adelante. Se sustrae el elemento en el inicio de la ventana de la suma actual y se incrementa el índice de inicio (`windowStart`).



Se proporcionan valores de prueba para el arreglo (`arr`) y el valor objetivo (`S`). Se ejecuta la función `smallestSubarrayWithSum(arr, S)` y se imprime el tamaño y los elementos del subarreglo más pequeño que cumple con la condición especificada.