var titulo = document.querySelector('.titulo');

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var tdAltura = paciente.querySelector('.info-altura');
var tdImc = paciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 500){
  tdImc.textContent = "Peso Inválido!";
  pesoValido = false;
}
if(altura <= 0 || altura >= 3.5){
  tdImc.textContent = "Altura Inválida!";
  pesoValido = false;
}
if(pesoValido && alturaValida){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}
