document.write("<h1>Hola mundo</h1>") //escribe hola mundo como un titulo
document.write("<h3>html</h3>") // escribe algo mas chico
//tipos de datos
console.log("esto es una cadena") //string
console.log(true) //bool
console.log(14.2) // float
console.log([1,2,3,4,5]) //vector
console.log({ // 
    "NomobreUsuario": "jose", //string
    "Puntuacion": 90.2, //float
    "HorasJuego": 90, // int
    "Profecional": true, //bool
    "Amigos": ["pancho", "ana" ] //vector
}) //objeto es todo lo anterior
var NomobreUsuario = "Juan"; //creando una variable
let ApellidoUsuario = "Perez"; //creando una variable
console.log(NomobreUsuario) //imprime NombreUsuario
console.log(ApellidoUsuario) //imprime ApellidoUsuario
 const PI = 3.1416 //creando constante
 console.log(PI) //imprime PI
let a=5,b=2,c; // declaramos a b y c
console.log("a = "+a); // lo que vale a
console.log("b = "+b);// lo que vale b
c= a+b; //suma 
console.log("suma = "+c) //imprime suma
c= a-b; // resta
console.log("resta = "+c) // imprime resta
c= a*b; // multiplicacion
console.log("multiplicacion = "+c) // imprime multiplicacion
c= a/b; // division
console.log("division = "+c) //imprime division
let NombreCompletoUsuario = NomobreUsuario+" "+ApellidoUsuario; // juntamos nombre y apellido de usuario
console.log(NombreCompletoUsuario) // imprimimos nombre completo de usuario
console.log("Y su numero de caracteres es "+NombreCompletoUsuario.length) // saber cuanto mide una cadena de caracteres
let compara; //declaramos variable para comparar a y b 
compara = a<b // comparamos a y b 
console.log(compara) //imprime la comparacion bool
if (a==b===true){// vemos si a y b son iguales
console.log("a = "+a+"& b = "+b+" son iguales") //mensaje de consola
}else{ //si no son iguales
if(a<b===true){ //si a menor que b 
console.log("a = "+a+" es menor que b = "+b) // mensaje de consola
}else{//si a no es menor que b
console.log("a = "+a+" es mayor que b = "+b) // mensaje de consola
}//cierra si a no es menor que b
}// cierra else si no son iguales
if(a%2===0){ //a es divisible entre 2?
    console.log("a = "+a+" es divisible entre 2") // un mensaje en consola si sí
}else{ // si a no es divisible entre 2
    console.log("a = "+a+" no es divisible entre 2") // un mensaje en sonsola si no
} // cerramos si a no es divisible entre 2
if(b%2===0){ //b es divisible entre 2?
    console.log("b = "+b+" es divisible entre 2") // si a sí es divisible entre 2
}else{ // si a no es divisible entre 2 
    console.log("b = "+b+" no es divisible entre 2")// un mensaje en sonsola si no
} // cerramos si a no es divisible entre 2
 
log ="ana"; //ell nombre de log
switch(log){ // un swich para saber quien eres
    case "ana": // en caso de que seas ana
        console.log("Hola ana") //mensaje de consola
        break; //cierro caso de que seas ana 
    case "jose": // en caso de que seas jose
        console.log("Hola jose") // mensaje de consola
        break; //cierro en caso de que seas jose
    case "Juan": // en caso de que seas Juan
        console.log("Hola Juan") // mensaje de consola
        break; //cierro en caso de que seas Juan
    case "pancho":// en caso de que seas pancho
        console.log("Hola pancho") // mensaje de consola
        break;//cierro en caso de que seas pancho
    default:// en caso de que no seas ninguno de los anteriores
        console.log("Quien eres?") // mensaje de consola
}// cierro switch

let ac=1 //declaramos ac
console.log("Vamos a mostrar b = "+b+" veces el a = "+a) //un mensaje en consola
while(ac<=b){ //un ciclo while mientras ac sea menor o igual que b
    console.log(a); // se imprime a
    ac++; // el contador sube mientras
}// cierra while
console.log("Vamos a mostrar a = "+a+" veces el b = "+b) // un mensaje de consola
for(let bc=1;bc<=a;bc++){ //un for declara bc, fucniona mientras bc sea menor o igual que, aunmenta uno por casa vuelta
    console.log(b)// se imprime b
}// cierro ford
console.log("Vamos a mostrar ac = "+ac+" hasta que sea 0 de nuevo")// un mensaje en consola
do{// abrimor do while
console.log(ac) // se imprime ac
ac--;// se resta uno a ac
}while(ac!=-1);// mientras ac sea diferente de 1

function funcion(nombre){ //declaramos funcion   
console.log("Aqui esta la funcion") //mensaje de consola
console.log("Hola "+ nombre); // mensaje de consola + nuestro valor a recibir 
} // cerramos lo que hace la funcion
funcion("Pepe"); //llamamos la funcion
funcion("Maria"); //llamamos la funcion de nuevo

function sumar (a,b){
    console.log("suma en funcion es = "+(a+b))
}
sumar(a, b);