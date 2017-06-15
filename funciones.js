function home(){
	document.getElementById("Agregar").style.display="none";
        document.getElementById("Main").style.display="none";
        document.getElementById("Inicio").style.display="block";
}


function guardarNegocio(){
	nombre = document.getElementById('Ne').value;
	descripcion = document.getElementById('De').value;
	promociones = document.getElementById('Pro').value;

	if (nombre === "" || descripcion === "") {
		navigator.vibrate(500);
		alert('Los campos nombre y descripcion son obligatorios');

	}
	else{
	navigator.geolocation.getCurrentPosition(guardar);
	function guardar(coordenadas){
		coordenadasCompletas = coordenadas.coords.latitude+','+coordenadas.coords.longitude;
		localStorage.setItem(nombre, descripcion);
		localStorage.setItem('promociones'+nombre, promociones);
		localStorage.setItem('ubicacion'+nombre, coordenadasCompletas);

		alert("Negocio registrado exitosamente!");
		document.getElementById("Agregar").style.display="none";
        document.getElementById("Main").style.display="none";
        document.getElementById("Inicio").style.display="block";
    }
}
}

function buscar(){

	document.getElementById('Descripcion').innerHTML = "Descripcion del negocio: ";
	document.getElementById('promo').innerHTML = "Promociones: ";
	document.getElementById('mapa').src="";

	nombre = document.getElementById('in').value;
	descripcion = localStorage.getItem(nombre);
	if(descripcion === null){
		alert('Negocio no encontrado');
	}
	else{
		
		promociones = localStorage.getItem('promociones'+nombre);
		ubicacion = localStorage.getItem('ubicacion'+nombre);
		document.getElementById('Descripcion').innerHTML += "<br>" + descripcion;
		document.getElementById('promo').innerHTML += "<br>" + promociones;
		mapaEstatico = "https://maps.googleapis.com/maps/api/staticmap? center="+ubicacion+"&scale=2&zoom=15&size=150x100&markers=color:blue%7Clabel:A%7C"+ubicacion;
		document.getElementById('mapa').src=mapaEstatico;
	}
}

function borrar(){
	nombre = document.getElementById('in').value;
	localStorage.removeItem(nombre);
	localStorage.removeItem('ubicacion'+nombre);
	localStorage.removeItem('promociones'+nombre);
	alert("Negocio eliminado correctamente");
}