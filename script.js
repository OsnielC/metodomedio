function generarNumeros() {
  // Obtener valores iniciales
  const semilla = parseInt(document.getElementById('semilla').value);
  const iteraciones = parseInt(document.getElementById('cantidad').value);
  let x = semilla;
  const numerosGenerados = [];

  // Generar números aleatorios
  for (let i = 0; i < iteraciones; i++) {
    // Calcular nuevo valor de x
    const xCuadrado = Math.pow(x, 2);
    
    const xCuadradoString = xCuadrado.toString();
    let xMedio= "";
    let izquierda = ""
    let derecha = ""

    console.log(xCuadradoString)
    if (xCuadradoString.length == 8) {
      xMedio = xCuadradoString.slice(2, 6);
      izquierda= xCuadradoString.slice(0, 2);
      derecha= xCuadradoString.slice(6, 8);
    } else if (xCuadradoString.length == 7) {
      xMedio = xCuadradoString.slice(1, 5);
      izquierda= xCuadradoString.slice(0, 1);
      derecha= xCuadradoString.slice(5, 8);
    } else if (xCuadradoString.length == 6) {
      xMedio = xCuadradoString.slice(1, 5);
      izquierda= xCuadradoString.slice(0, 1);
      derecha= xCuadradoString.slice(6, 8);
    } else {
      xMedio = xCuadradoString.slice(0, 4);
      izquierda= "0";
      derecha= "0";
    }
    x = parseInt(xMedio);

    // Calcular números aleatorios
    const aleatorio = parseFloat(xMedio/10000);



    // Agregar a la lista de números generados
    numerosGenerados.push({
      n: i +1,
      x: x,
      izquierda: izquierda,
      centro: xMedio,
      derecha: derecha,
      aleatorio: aleatorio
    });
  }

  // Mostrar resultados en tabla
  const tablaResultados = document.getElementById('tabla-resultados');
  tablaResultados.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>n</th>
          <th>x</th>
          <th>Izquierda</th>
          <th>Centro</th>
          <th>Derecha</th>
          <th>Aleatorio</th>
        </tr>
      </thead>
      <tbody>
        ${numerosGenerados.map(numero => `
          <tr>
            <td>${numero.n}</td>
            <td>${numero.x}</td>
            <td>${numero.izquierda}</td>
            <td>${numero.centro}</td>
            <td>${numero.derecha}</td>
            <td>${numero.aleatorio.toFixed(4)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}
