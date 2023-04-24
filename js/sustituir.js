/*Precarga de Imagenes originales(Se verifica que directamente puede asignarsele al atributo src de img la variable que contiene la propiedad del obejo creado o el objeto creado más su propiedad. vale para ambas precargas de imagenes
Así:
	document.images[0].src=berutiOri;
	document.images[0].width=berutiOri;
	document.images[0].height=berutiOri;

o así

	document.images[0].src=originalBeruti.src;
	document.images[0].width=originalBeruti.width;
	document.images[0].height=originalBeruti.height; )*/

var originalBeruti=new Image(400,400);
var berutiOri=originalBeruti.src="../img/beruti.jpg";

var originalObelisco=new Image(400,400);
var obeliscoOri=originalObelisco.src="../img/obelisco.jpg";

var originalTribunales=new Image(400,400);
var tribunalesOri=originalTribunales.src="../img/tribunales.jpg";

var originalMadero=new Image(400,400);
var maderoOri=originalMadero.src="../img/madero.jpg";

var originalCordoba=new Image(400,400);
var cordobaOri=originalCordoba.src="../img/cordoba.jpg";


/*Precarga de imágenes de sustitución*/

var sustitucionBeruti=new Image(400,400);
var berutiSus=sustitucionBeruti.src="../img/sustitucionContilde/berutitick.jpg";

var sustitucionObelisco=new Image(400,400);
var obeliscoSus=sustitucionObelisco.src="../img/sustitucionContilde/obeliscotick.jpg";

var sustitucionTribunales=new Image(400,400);
var tribunalesSus=sustitucionTribunales.src="../img/sustitucionContilde/tribunalestick.jpg";

var sustitucionMadero=new Image(400,400);
var maderoSus=sustitucionMadero.src="../img/sustitucionContilde/maderotick.jpg";

var sustitucionCordoba=new Image(400,400);
var cordobaSus=sustitucionCordoba.src="../img/sustitucionContilde/cordobatick.jpg";

/*Se crea Matriz que contenga los valores de src de cada imágen precargada original*/

var matrizImgOriginal=new Array(berutiOri, obeliscoOri, tribunalesOri, maderoOri, cordobaOri);

/*Se crea Matriz que contenga los valores de src de cada imágen precargada de sustitución*/

var matrizImgSustitucion=new Array(berutiSus, obeliscoSus, tribunalesSus, maderoSus, cordobaSus);

/*La siguiente estructura de control verifica la funcionalidad de las matrices creadas
*/
var i;

function verMatriz(){
		for(i=0; i<=4; i++){
			alert("El valor de la MatrizImgesHTML es: "+document.images[i].src);
		}
}
var indice;



function sustituir(objeto){
	for(indice=0; indice <=5; indice++){
	if ((document.images[indice].src.lastIndexOf("tick.jpg"))==-1){//si no hay sustitución
	switch(eval(objeto)){

					case B:
					eval(objeto).src=sustitucionBeruti.src;
				    eval(objeto).width=sustitucionBeruti.width;
					eval(objeto).height=sustitucionBeruti.height;
					break;

					case O:
					eval(objeto).src=sustitucionObelisco.src;
					eval(objeto).width=sustitucionObelisco.width;
					eval(objeto).height=sustitucionObelisco.height;
					break;

					case T:
					eval(objeto).src=sustitucionTribunales.src;
					eval(objeto).width=sustitucionTribunales.width;
					eval(objeto).height=sustitucionTribunales.height;
					break;

					case M:
					eval(objeto).src=sustitucionMadero.src;
					eval(objeto).width=sustitucionMadero.width;
					eval(objeto).height=sustitucionMadero.height;
					break;

					case C:
					eval(objeto).src=sustitucionCordoba.src;
					eval(objeto).width=sustitucionCordoba.width;
					eval(objeto).height=sustitucionCordoba.height;
					break;
				}
			}else
				if ((document.images[indice].src.lastIndexOf("tick.jpg"))!=-1)//si hay sustitución
				{
					document.images[indice].src=matrizImgOriginal[indice];//resetea matriz Images
				}

		}
}

nodoAnclajes=document.getElementsByTagName("img");
for (var i = 0; i < nodoAnclajes.length; i++) {
	nodoAnclajes[0].setAttribute("onClick", "sustituir(B);");
	nodoAnclajes[1].setAttribute("onClick", "sustituir(O);");
	nodoAnclajes[2].setAttribute("onClick", "sustituir(T);");
	nodoAnclajes[3].setAttribute("onClick", "sustituir(M);");
	nodoAnclajes[4].setAttribute("onClick", "sustituir(C);");
}


/*Funciones para Optimizar experiencia de Usuarios(estas funciones se pueden optimizar con otrs eztructuras de control)*/

function quitarArvertencia(){
	if (formulario.nombre.style.borderColor=="yellow") {
		formulario.nombre.style.borderColor="white";
	}else if (formulario.apellido.style.borderColor=="yellow")
	 {formulario.apellido.style.borderColor="white";}

	 else if (formulario.mail.style.borderColor=="yellow") 
	 {formulario.mail.style.borderColor="white";}
}
nodoNom=document.getElementById("nombre");
nodoNom.setAttribute("onFocus", "quitarArvertencia();");
nodoNom.setAttribute("onBlur", "quitarArvertencia();");

nodoApe=document.getElementById("apellido");
nodoApe.setAttribute("onFocus", "quitarArvertencia();");
nodoApe.setAttribute("onBlur", "quitarArvertencia();");

/*nodoMsj=document.getElementById("mensaje");
nodoMsj.setAttribute("onFocus", "quitarArvertencia();");
nodoMsj.setAttribute("onBlur", "quitarArvertencia();");*/

nodoMail=document.getElementById("mail");
nodoMail.setAttribute("onFocus", "quitarArvertencia();");
nodoMail.setAttribute("onBlur", "quitarArvertencia();");

function tel(){
	
		if(formulario.telefono.value=='(COD)7777-8888'){
			formulario.telefono.value='';
			formulario.telefono.style.borderColor="white";}
			else if(formulario.telefono.value=='')
			{
				formulario.telefono.value='(COD)7777-8888';
			}
		}
nodoTel=document.getElementById("telefono");
nodoTel.setAttribute("onFocus", "tel();");
nodoTel.setAttribute("onBlur", "tel();");

	
function fech(){
	
	if(formulario.fecha.value=='00/00/0000'){
		formulario.fecha.value='';
		formulario.fecha.style.borderColor="white";}
	else if(formulario.fecha.value=='')
	{
		formulario.fecha.value='00/00/0000';
	}
}
nodoFech=document.getElementById("fecha");
nodoFech.setAttribute("onFocus","fech();");
nodoFech.setAttribute("onBlur", "fech();");


function comen(){
	
	if(formulario.comensales.value=='00'){
		formulario.comensales.value='';
		formulario.comensales.style.borderColor="white";}
	else if(formulario.comensales.value=='')
	{
		formulario.comensales.value='00';
	}
}

nodoFech=document.getElementById("comensales");
nodoFech.setAttribute("onFocus","comen();");
nodoFech.setAttribute("onBlur", "comen();");



function msj(){
	if(formulario.mensaje.value=='Complete esta área con información adicional que considere necesaria.'){
		formulario.mensaje.value='';
		formulario.mensaje.style.borderColor="white";}
	else if(formulario.mensaje.value=='')
	{
		formulario.mensaje.value='Complete esta área con información adicional que considere necesaria.';
	}
}
nodoFech=document.getElementById("mensaje");
nodoFech.setAttribute("onFocus","msj();");
nodoFech.setAttribute("onBlur", "msj();");

/*Funciones para optimizar*/











/*

function sustituir(objeto){
		for(indice=0; indice <=5; indice++){
			//for(i=0; i<=matrizImgSustitucion.length; i++){
				if ((document.images[indice].src.lastIndexOf("tick.jpg"))==-1)//si no hay sustitución
				{
				document.images[indice].src=matrizImgOriginal[indice];//resetearmatriz
				
				
				switch(eval(objeto)){

					case B:
					eval(objeto).src=sustitucionBeruti.src;
					eval(objeto).width=sustitucionBeruti.width;
					eval(objeto).height=sustitucionBeruti.height;
					break;

					case O:
					eval(objeto).src=sustitucionObelisco.src;
					eval(objeto).width=sustitucionObelisco.width;
					eval(objeto).height=sustitucionObelisco.height;
					break;

					case T:
					eval(objeto).src=sustitucionTribunales.src;
					eval(objeto).width=sustitucionTribunales.width;
					eval(objeto).height=sustitucionTribunales.height;
					break;

					case M:
					eval(objeto).src=sustitucionMadero.src;
					eval(objeto).width=sustitucionMadero.width;
					eval(objeto).height=sustitucionMadero.height;
					break;

					case C:
					eval(objeto).src=sustitucionCordoba.src;
					eval(objeto).width=sustitucionCordoba.width;
					eval(objeto).height=sustitucionCordoba.height;
					break;
				}
}else{for(indice=0; indice <=5; indice++){
	if ((document.images[indice].src.lastIndexOf("tick.jpg"))!=-1){
		document.images[indice].src=matrizImgSustitucion[indice];
	
	switch(eval(objeto)){

					case B:
					eval(objeto).src=originalBeruti.src;
					eval(objeto).width=originalBeruti.width;
					eval(objeto).height=originalBeruti.height;
					break;

					case O:
					eval(objeto).src=originalObelisco.src;
					eval(objeto).width=originalObelisco.width;
					eval(objeto).height=originalObelisco.height;
					break;

					case T:
					eval(objeto).src=sustitucionTribunales.src;
					eval(objeto).width=sustitucionTribunales.width;
					eval(objeto).height=sustitucionTribunales.height;
					break;

					case M:
					eval(objeto).src=sustitucionMadero.src;
					eval(objeto).width=sustitucionMadero.width;
					eval(objeto).height=sustitucionMadero.height;
					break;

					case C:
					eval(objeto).src=sustitucionCordoba.src;
					eval(objeto).width=sustitucionCordoba.width;
					eval(objeto).height=sustitucionCordoba.height;
					break;
				}
			}


{switch(eval(objeto)){

					case B:
					eval(objeto).src=originalBeruti.src;
					eval(objeto).width=originalBeruti.width;
					eval(objeto).height=originalBeruti.height;
					break;

					case O:
					eval(objeto).src=originalObelisco.src;
					eval(objeto).width=originalObelisco.width;
					eval(objeto).height=originalObelisco.height;
					break;

					case T:
					eval(objeto).src=originalTribunales.src;
					eval(objeto).width=originalTribunales.width;
					eval(objeto).height=originalTribunales.height;
					break;

					case M:
					eval(objeto).src=originalMadero.src;
					eval(objeto).width=originalMadero.width;
					eval(objeto).height=originalMadero.height;
					break;

					case C:
					eval(objeto).src=originalCordoba.src;
					eval(objeto).width=originalCordoba.width;
					eval(objeto).height=originalCordoba.height;
					break;
				}




*/



/*Función para sustituir Imagen(Para asignar una sustitución comprobar que en la matriz Images[] no haya ninguna
sustitución primero. Si hay una sustitución asignar a todas las imagenes de la matriz Images[] la precarga de imágenes originales y luego llevar a cabo la sustitución inicial.
Si no llegase a existir una sustitucion asignar imágen de sustitución, sino asignar originales precargadas)*/


/*FUNCIONAL
function sustituir(susti){

	for(indice=0; indice<document.images.length; indice++)
	{
		if ((document.images[indice].src.lastIndexOf("tick.jpg"))==-1)/*Verificado. No existe ninguna sustitución.
			Para verificar si existe se utiliza !=-1*/
	  /*  {
			document.images[0].src=susti;

		}
		else {
			for(indice=0; indice<document.images.length; indice++){
				if((document.images[indice].src.lastIndexOf("tick.jpg"))!=-1){
			document.images[0].src=originalBeruti.src;
			document.images[0].width=originalBeruti.width;
			document.images[0].height=originalBeruti.height;
			}
		}
		}
		
		//alert("El valor de los elementos SRC es:"+document.images[indice].src);
	}
	
}






/*La sección subsiguiente verifica la funcionalidad. Es factible corroborar a través de un script 
el valor de la cadena comprendida en SRC de las imagenes y su manipulación.

alert(	"El valor del atributo SRC es:"+document.images["tribunales"].src);

function cambiar()
{
	document.images["tribunales"].src=sustitucionTribunales.src;
	document.images["tribunales"].width=sustitucionTribunales.width;
	document.images["tribunales"].height=sustitucionTribunales.height;
alert("El valor del atributo SRC es:"+document.images["tribunales"].src);
	

}

nodoMenu=document.getElementById("tribunal");
nodoMenu.setAttribute("onClick", "cambiar();");

	
nodoMenud=document.getElementById("tribunal");
nodoMenud.setAttribute("onMouseOut", "restaurar();");
*/