var datos=document.getElementsByName("ingresar-texto");

var texto="";
var r1,r2,r3,r4,r5="";
var result="";
var num;
function reset()
{
  texto="";
    r1="";
    r2="";
    r3="";
    r4="";
    r5="";
    result="";
    const num=0;
    document.getElementById("ingresar-texto").value="";
}

function leer(num)
{
    
    for(var i=0;i<datos.length;i++)
    {
        texto+=datos[i].value;
        
    }
    
    if(parseInt(texto.length)==0 && num==1 )
    {
        document.getElementById("resultado-true").style.display="none";
        document.getElementById("resultado-false").style.display="inline";
        
        document.getElementById("resultado").innerHTML="Ningun mensaje fue encontrado";
         
    } 
    else if(parseInt(texto.length)==0 && num==2 )
    {
        document.getElementById("resultado-true").style.display="none";
        document.getElementById("resultado-false").style.display="inline";
        document.getElementById("resultado").innerHTML="Ningun mensaje fue encontrado";
         
    } 

    else if(parseInt(texto.length)>0 && num==1)
    {
        
        document.getElementById("resultado-false").style.display="none";
        document.getElementById("resultado-true").style.display="inline";
        
         result=encripta(texto.toLowerCase());
      document.getElementById("mensaje-encriptado").value=result;
    
   reset();
    }

    else  if(parseInt(texto.length)>0 && num==2)
    {
        document.getElementById("resultado-false").style.display="none";
        document.getElementById("resultado-true").style.display="inline";
        
         result=decifrar(texto);
        
      document.getElementById("mensaje-encriptado").value=result;
    
   reset();


    }
 
   
}

function encripta(texto)
{
r1=texto.replaceAll('e', 'enter'); 
r2=r1.replaceAll('i', 'imes'); 
r3=r2.replaceAll( 'a', 'ai'); 
r4=r3.replaceAll('o', 'ober'); 
r5=r4.replaceAll('u', 'ufat'); 
return r5;
 

}

function decifrar(texto)
{
    r1=texto.replaceAll( 'enter','e'); 
    r2=r1.replaceAll( 'imes','i'); 
    r3=r2.replaceAll( 'ai','a' ); 
    r4=r3.replaceAll( 'ober','o'); 
    r5=r4.replaceAll( 'ufat','u'); 
 return r5;

}

function copiar()
{
    var mensaje=document.getElementById("mensaje-encriptado").value;
    var textcopy="";
    for(var x=0;x<mensaje.length;x++)
    {
        textcopy+=mensaje[x];
    }
    document.getElementById("ingresar-texto").value="";
    document.getElementById("ingresar-texto").value=textcopy;
    document.getElementById("resultado-true").style.display="none";
}