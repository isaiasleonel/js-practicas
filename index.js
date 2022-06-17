//btn calcular
document.getElementById('btn-calcular').addEventListener('click', () => {
  let select = document.getElementById('select').value;
  let resultado = document.getElementById('resultado');
  let numero1 = Number(document.getElementById('numero1').value);
  let numero2 = Number(document.getElementById('numero2').value);

  // debugger;
  //condicion
  console.log(select);
  let operaciones;
  if (select == '+') {
    operaciones = numero1 + numero2;
  } else if (select == '-') {
    operaciones = numero1 - numero2;
  } else if (select == '/') {
    operaciones = numero1 / numero2;
  } else if (select == '*') {
    operaciones = numero1 * numero2;
  }

  resultado.innerHTML = operaciones;
});
