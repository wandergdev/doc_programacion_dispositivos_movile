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
    combinations[N].forEach((comb) => console.log(comb)); // Se imprimen las formas posibles
}

//Agregar valores para su uso.
const N = 4; // Número de escalones
const steps = [1, 2]; // Pasos permitidos

uniqueWaysToClimbStairs(N, steps); // Llamada a la función
