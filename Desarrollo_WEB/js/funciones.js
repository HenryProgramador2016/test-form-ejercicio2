/**
 * 
 *
 * @version                               2.2
 *
 * @author                 Henry Fernnado Evangelista Bonilla < sagitario_henry_1993@hotmail.com>
 * Framework 

 VARIABLES GLOBALES
 categorias --->Se almacenará en esta variable los nombres de las categorias que se registrarán en el sistema.
 contador   --->Es un contador, en el cual se almacenará la cantidad de los productos registrados en el sistema.
 total 	    --->Se almacenará en esta variable la suma de los precios de los productos registrados en  el sistema. 

 VARIABLES LOCALES

 producto  --->Esta variable almacenará el nombre del producto.
 categoria --->Esta variable almacenará el nombre de la categoría.
 precio    --->Esta variable almacenará el precio del producto.
 */
$(document).ready(function(){
	var categorias="";
	var contador=0;
	var total=0;


	/*Función que nos permitira que al hacer click sobre el boton con el id(registrar) podamos registrar
	 un producto con una categoría y precio correspondiente,motrando los datos en el textarea
	*/
	$("#registrar").click(function(){
		var producto=$("#producto").val();
		var categoria=$("#categoria").val();
		var precio=parseInt($("#precio").val());
		categorias+=categoria+"-";
		total+=precio;
		var resultado= "Producto: "+producto +"- Categoría: "+categoria +"- Precio:"+precio;
		$("#registrarProducto").html(resultado);
		contador++;

	});

	/*Función que nos permitira que al hacer click sobre el boton con el id(total_categorias) podamos 
	mostrar los nombres de las categorías registradas y la cantidad de sus productos registrados
	*/
	$("#total_categorias").click(function(){
		alert("Total de categorias : "+ categorias +" \nCantidad de Productos "+contador);

	});

	/*Función que nos permitira que al hacer click sobre el boton con el id(total_productos) 
	podamos mostrar la cantidad total de los productos registrados
	*/
	$("#total_productos").click(function(){
		alert("Total de productos registrados es  : "+contador);
	});

	/*Función que nos permitira que al hacer click sobre el boton con el id(suma_productos) podamos 
	mostrar los nombres de las categorías registradas y la cantidad de sus productos registrados 
	*/
	$("#suma_productos").click(function(){
		alert("Total de categorias : "+ categorias +" \nCantidad de Productos "+contador+"\n Suma de los precios de Productos S/.  " +total);
	});
})

/*Función que nos permitira validar los campos que requieran el ingreso de solo letras*/
function soloLetras(e,value) {
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = "áéíóúabcdefghijklmnñopqrstuvwxyz";
	especiales = [8,39,32,9,37,38,40];

	tecla_especial = false
	for ( var i in especiales) {
		if (key == especiales[i]) {
			tecla_especial = true;
			break;
		}
	}

	if (letras.indexOf(tecla) == -1 && !tecla_especial)
		return false;
}

/*Función que nos permitira validar los campos que requieran el ingreso de solo números*/
function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

