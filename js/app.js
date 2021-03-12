// AL iniciar la web
Swal.fire({
  title: 'Bienvenido',
  text: 'Al Quiz del desarrollador',
  confirmButtonText: 'Empezemos!'
});

var listaDeCorrectas = [];

//Pregunta 1
let answer1a = document.getElementById("answer1a");
let answer1b = document.getElementById("answer1b");
let answer1c = document.getElementById("answer1c");
let answer1d = document.getElementById("answer1d");

answer1a.addEventListener("click", respuestaCorrecta1);
answer1b.addEventListener("click", respuestaIncorrecta1);
answer1c.addEventListener("click", respuestaIncorrecta1);
answer1d.addEventListener("click", respuestaIncorrecta1);

let next1 = document.getElementById("next1");
next1.addEventListener("click", siguientePregunta1);


//Funciones de respuesta correcta e incorrecta - pregunta 1
function respuestaCorrecta1 () {
  this.style.background = "green";
  next1.style.display = "block";
  desabilitarBoton1();
  listaDeCorrectas.push(listaDeCorrectas.length);
};

function respuestaIncorrecta1 () {
  this.style.background = "red";
  next1.style.display = "block";
  desabilitarBoton1();
};

//Desabilitar boton
function desabilitarBoton1 () {
  answer1a.disabled = "true";
  answer1b.disabled = "true";
  answer1c.disabled = "true";
  answer1d.disabled = "true";
}

//Siguiente Pregunta
let preguntaRespondida1 = document.querySelector(".question1");
let preguntaSiguiente2 = document.querySelector(".question2");

function siguientePregunta1 (){
  preguntaRespondida1.style.display = "none";
  preguntaSiguiente2.style.display = "block";
  next1.style.display = "none";
};



//Pregunta 2
let answer2a = document.getElementById("answer2a");
let answer2b = document.getElementById("answer2b");
let answer2c = document.getElementById("answer2c");
let answer2d = document.getElementById("answer2d");

answer2a.addEventListener("click", respuestaIncorrecta2);
answer2b.addEventListener("click", respuestaIncorrecta2);
answer2c.addEventListener("click", respuestaCorrecta2);
answer2d.addEventListener("click", respuestaIncorrecta2);

let next2 = document.getElementById("next2");
next2.addEventListener("click", siguientePregunta2);

//Funciones de respuesta correcta e incorrecta - pregunta 2
function respuestaCorrecta2 () {
  this.style.background = "green";
  next2.style.display = "block";
  desabilitarBoton2();
  listaDeCorrectas.push(listaDeCorrectas.length);
};

function respuestaIncorrecta2 () {
  this.style.background = "red";
  next2.style.display = "block";
  desabilitarBoton2();
};

//Desabilitar boton
function desabilitarBoton2 () {
  answer2a.disabled = "true";
  answer2b.disabled = "true";
  answer2c.disabled = "true";
  answer2d.disabled = "true";
}

//Siguiente Pregunta
let preguntaRespondida2 = document.querySelector(".question2");
let preguntaSiguiente3 = document.querySelector(".question3");

function siguientePregunta2 (){
  preguntaRespondida2.style.display = "none";
  preguntaSiguiente3.style.display = "block";
  next2.style.display = "none";
};



//Pregunta 3
let answer3a = document.getElementById("answer3a");
let answer3b = document.getElementById("answer3b");
let answer3c = document.getElementById("answer3c");
let answer3d = document.getElementById("answer3d");

answer3a.addEventListener("click", respuestaIncorrecta3);
answer3b.addEventListener("click", respuestaCorrecta3);
answer3c.addEventListener("click", respuestaIncorrecta3);
answer3d.addEventListener("click", respuestaIncorrecta3);

let next3 = document.getElementById("next3");
next3.addEventListener("click", siguientePregunta3);

//Funciones de respuesta correcta e incorrecta - pregunta 3
function respuestaCorrecta3 () {
  this.style.background = "green";
  next3.style.display = "block";
  desabilitarBoton3();
  listaDeCorrectas.push(listaDeCorrectas.length);
};

function respuestaIncorrecta3 () {
  this.style.background = "red";
  next3.style.display = "block";
  desabilitarBoton3();
};

//Desabilitar boton
function desabilitarBoton3 () {
  answer3a.disabled = "true";
  answer3b.disabled = "true";
  answer3c.disabled = "true";
  answer3d.disabled = "true";
}

//Siguiente Pregunta
let preguntaRespondida3 = document.querySelector(".question3");
let preguntaSiguiente4 = document.querySelector(".question4");

function siguientePregunta3 (){
  preguntaRespondida3.style.display = "none";
  preguntaSiguiente4.style.display = "block";
  next3.style.display = "none";
};


// //Pregunta 4
let answer4a = document.getElementById("answer4a");
let answer4b = document.getElementById("answer4b");
let answer4c = document.getElementById("answer4c");
let answer4d = document.getElementById("answer4d");

answer4a.addEventListener("click", respuestaIncorrecta4);
answer4b.addEventListener("click", respuestaCorrecta4);
answer4c.addEventListener("click", respuestaIncorrecta4);
answer4d.addEventListener("click", respuestaIncorrecta4);

let next4 = document.getElementById("next4");
next4.addEventListener("click", siguientePregunta4);

//Funciones de respuesta correcta e incorrecta - pregunta 2
function respuestaCorrecta4 () {
  this.style.background = "green";
  next4.style.display = "block";
  desabilitarBoton4();
  listaDeCorrectas.push(listaDeCorrectas.length);
};

function respuestaIncorrecta4 () {
  this.style.background = "red";
  next4.style.display = "block";
  desabilitarBoton4();
};

//Desabilitar boton
function desabilitarBoton4 () {
  answer4a.disabled = "true";
  answer4b.disabled = "true";
  answer4c.disabled = "true";
  answer4d.disabled = "true";
}

//Siguiente Pregunta
let preguntaRespondida4 = document.querySelector(".question4");
let preguntaSiguiente5 = document.querySelector(".question5");

function siguientePregunta4 (){
  preguntaRespondida4.style.display = "none";
  preguntaSiguiente5.style.display = "block";
  next4.style.display = "none";
};


//Pregunta 5
let answer5a = document.getElementById("answer5a");
let answer5b = document.getElementById("answer5b");
let answer5c = document.getElementById("answer5c");
let answer5d = document.getElementById("answer5d");

answer5a.addEventListener("click", respuestaCorrecta5);
answer5b.addEventListener("click", respuestaIncorrecta5);
answer5c.addEventListener("click", respuestaIncorrecta5);
answer5d.addEventListener("click", respuestaIncorrecta5);

let score = document.getElementById("score");
score.addEventListener("click", estadisticas);

//Funciones de respuesta correcta e incorrecta - pregunta 5
function respuestaCorrecta5 () {
  this.style.background = "green";
  score.style.display = "block";
  desabilitarBoton5();
  listaDeCorrectas.push(listaDeCorrectas.length);
};

function respuestaIncorrecta5 () {
  this.style.background = "red";
  score.style.display = "block";
  desabilitarBoton5();
};

//Desabilitar boton
function desabilitarBoton5 () {
  answer5a.disabled = "true";
  answer5b.disabled = "true";
  answer5c.disabled = "true";
  answer5d.disabled = "true";
}

let preguntaRespondida5 = document.querySelector(".question5");

function estadisticas () {
  if (listaDeCorrectas.length >= 1 && listaDeCorrectas.length <= 2){
    alert("Has acertado solo " + listaDeCorrectas.length + " a estudiar!");
  } else if (listaDeCorrectas.length > 2 && listaDeCorrectas.length <= 4) {
    alert("Has acertado " + listaDeCorrectas.length + " vas por buen camino!");
  } else if (listaDeCorrectas.length = 5) {
    alert("Has acertado " + listaDeCorrectas.length + " a celebrar");
  }
}