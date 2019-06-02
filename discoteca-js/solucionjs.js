let bebida=prompt('que desea tomar: leche, coca-cola ó cerveza'),
    edad=0,
    mensaje='Aqui tiene su ',
    mensajeNegativo='Lo siento pero no puedo servirle ';

if(bebida===undefined ||
   bebida==='' ||
   (bebida!=='leche' && bebida!=='coca-cola' && bebida!=='cerveza'))
	{
	mensaje=mensajeNegativo;
	bebida='';
	}
if(bebida!='leche')
	edad=prompt('Me puede decir su edad?');

if(bebida === 'cerveza' && edad<18 || (bebida === 'coca-cola' && edad <=14))
	mensaje=mensajeNegativo;

alert(mensaje+bebida);