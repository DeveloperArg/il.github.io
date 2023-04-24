/*Variables para Validación*/
var valor;
var nombre;
var apellido;
var telefono;
var mail;
var comensales;
var fecha;
var mensaje;

/*Variable para matriz*/
var indice;
var localElegido;



function validacion(){
//Validación Nombre
valor=document.getElementById("nombre").value;
if(valor==null||valor.length==0)
	{
		alert('Debe completar con su Nombre');
		formulario.nombre.style.borderColor="yellow";
		return false;
	}
	else if(valor!=null||valor.length!=0)
	{
		nombre=valor;
	}
//Validación Apellido
valor=document.getElementById("apellido").value;
if(valor==null||valor.length==0)
	{
		alert('Debe completar con su Apellido');
		formulario.apellido.style.borderColor="yellow";
		return false;
	}
	else if(valor!=null||valor.length!=0)
		{
			apellido=valor;
		}
//Validación Teléfono

valor=document.getElementById("telefono").value;
if(valor==null||valor.length==0||valor=='(COD)7777-8888')
	{
		alert('Debe completar con un N° telefónico');
		formulario.telefono.style.borderColor="yellow";
		return false;
	}else if(valor!=null||valor.length!=0||valor!='(COD)7777-8888')
	{
		telefono=valor;
	}

//Validación Mail
valor=document.getElementById("mail").value;
if(!(/^[a-z]([\w\.]*)@[a-z]([\w\.]*)\.[a-z]{2,3}$/.test(valor)))
	{
		alert('Debe completar con un casilla de correo válida');
		formulario.mail.style.borderColor="yellow";
		return false;
	}else if(/^[a-z]([\w\.]*)@[a-z]([\w\.]*)\.[a-z]{2,3}$/.test(valor))
	{
		mail=valor;
	}
//Validación Comensales
valor=document.getElementById("comensales").value;
if(valor==null||valor.length==0||valor=="00"||valor>=11)
	{
		alert('Debe completa con un N°, sólo podrá reservar para una cantidad máxima de 10 comensales.');
		formulario.comensales.style.borderColor="yellow";
		return false;
	}else if(valor!=null||valor.length!=0||valor!="00"||valor<11)
	{
		comensales=valor;
	}
//Validación Fecha
valor=document.getElementById("fecha").value;
if(valor==null||valor.length==0||valor=="00/00/0000")
	{
		alert('Debe completa con una fecha válida');
		formulario.fecha.style.borderColor="yellow";
		return false;
	}else if(valor!=null||valor.length!=0||valor!="00/00/0000")
	{
		fecha=valor;
	}


/*Si en la Matriz Images[] no hay sustitución alertar al Usuario, sino recorrer la matriz Images[] y para cada elemento si existe imagenes de sustitución asignar a la variable localElegido el valor de la dirtección correspondiente*/

if(((document.images[0].src.lastIndexOf("tick.jpg"))==-1)&&((document.images[1].src.lastIndexOf("tick.jpg"))==-1)&&((document.images[2].src.lastIndexOf("tick.jpg"))==-1)&&((document.images[3].src.lastIndexOf("tick.jpg"))==-1)&&((document.images[4].src.lastIndexOf("tick.jpg"))==-1))//si no hay imagen sustitución.
	{
		alert('Debe elegir un local para su reserva');
		return false;
	}else{
		for(indice=0; indice <=4; indice++){

		 if((document.images[indice].src.lastIndexOf("berutitick.jpg"))!=-1)//si hay sustitución
		{
			localElegido="Beruti 3391, Capital.";
		}
		else if((document.images[indice].src.lastIndexOf("obeliscotick.jpg"))!=-1)//si hay sustitución
		{
			localElegido="Av. Corrientes 959, Capital";
		}
		else if((document.images[indice].src.lastIndexOf("tribunalestick.jpg"))!=-1)//si hay sustitución
		{
			localElegido="Av. Corrientes 1269, Capital";
		}
		else if((document.images[indice].src.lastIndexOf("maderotick.jpg"))!=-1)//si hay sustitución
		{
			localElegido="Alicia M. de Justo 102, Capital";
		}
		else if((document.images[indice].src.lastIndexOf("cordobatick.jpg"))!=-1)//si hay sustitución
		{
			localElegido="Av. Rafael Nuñez 4005, Córdoba";
		}
	}
}

valor=document.getElementById("mensaje").value;
if(valor==null||valor.length==0||valor=="Complete esta área con información adicional que considere necesaria.")
{
alert('Si lo desea, puede agregar algún comentario');
formulario.mensaje.style.borderColor="yellow";
return false;
}else if(valor!=null||valor.length!=0||valor!="Complete esta área con información adicional que considere necesaria.")
	{
		/*valor="El cliente decidió no realizar comentarios";*/
		mensaje=valor;
	
/*Imprimir valores*/
alert("el valor de la variable APELLIDO es: "+apellido+"\n"
	+"el valor de la variable NOMBRE es: "+nombre+"\n"
	+"el valor de la variable TELEFONO es: "+telefono+"\n"
	+"el valor de la variable MAIL es: "+mail+"\n"
	+"el valor de la variable COMENSALES es:"+comensales+"\n"
	+"el valor de la variable FECHA es: "+fecha+"\n"
	+"el valor de la variable LOCALELEGIDO es: "+localElegido+"\n"
	+"el valor de la variable MENSAJE: "+mensaje);
}

return true;
}




nodoValidacion=document.getElementById("botonNext");
nodoValidacion.setAttribute("onClick", "return validacion();");