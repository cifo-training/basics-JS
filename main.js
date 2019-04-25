document.getElementById('button1').addEventListener('click', function() {
  exercici1();
});
document.getElementById('button2').addEventListener('click', function() {
  exercici2();
});
document.getElementById('button3').addEventListener('click', function() {
  exercici3();
});
// document.getElementById('button1').addEventListener('click', exercici1());
// document.getElementById('button2').addEventListener('click', exercici2());
// document.getElementById('button3').addEventListener('click', exercici3());

function exercici1() {
  let respuesta = 'jello'.indexOf('e');
  document.getElementById('text1').innerHTML = respuesta;
  console.log(respuesta);
}
// Exercici 2
function exercici2() {
  let nombre = prompt('Introduce tu nombre :');
  let apellido = prompt('Introduce tu apellido :');
  // alert(`Hola ${nombre} ${apellido}!`);
  document.getElementById('text2').innerHTML = `Hola ${nombre} ${apellido}!`;
}
// Exercici 3
function exercici3() {
  let population = 1000;
  let increaseTax = 0.02;
  let increaseNum = 50;
  let year = 1;

  while (population < 1200) {
    population += population * increaseTax + 50;
    console.log('population : ' + population + ' year :' + year);
    year++;
  }
  if (year > 2) {
    document.getElementById('text3').innerHTML = `Necessita ${year - 1} anys.`;
  } else {
    document.getElementById('text3').innerHTML = `Necessita ${year - 1} any.`;
  }
}
