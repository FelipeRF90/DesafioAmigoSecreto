// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var arr_amigos = [];

function agregarAmigo(){
	let amigo = document.getElementById('amigo').value;
	
	if(amigo == '')
	{
		alert('Por favor ingrese un nombre válido.');
		return;
	}
	
	arr_amigos.push(amigo);
	agregarListado(amigo);
	
	document.getElementById('amigo').value = '';
}

function agregarListado(nombre){
	let ul = document.getElementById("listaAmigos");
	let li = document.createElement("li");
	
	li.appendChild(document.createTextNode(nombre));
	ul.appendChild(li);
}

function sortearAmigo(){
	if(arr_amigos.length == 0)
	{
		alert('No hay amigos ingresados para el sorteo.');
		return;
	}
		
	let index = Math.floor(Math.random() * arr_amigos.length);
	
	let seleccionado = arr_amigos[index];
	agregarSeleccionado(seleccionado);
	
	document.getElementById("listaAmigos").innerHTML = "";
}

function agregarSeleccionado(nombre){
	let ul = document.getElementById("resultado");
	let li = document.createElement("li");
	let mensaje = 'El amigo secreto sorteado es: ' + nombre;
	
	li.appendChild(document.createTextNode(mensaje));
	ul.appendChild(li);
}