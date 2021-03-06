// El map es un array method que nos permite iterar sobre un arreglo y aplicar una función en cada iteración.
// Caso de uso: tenemos un array de precios y queremos obtener un nuevo array con el precio menos el descuento de 100 pesos.

const precios = [300,1500,230,600,800]
const descuento= 100
function getPrecioConDescuento (){
    const precioConDescuento= precios.map((precio)=>precio-descuento)
    return precioConDescuento
}
console.log(getPrecioConDescuento())

//El filter es un array para filtrar colecciones de datos, para partir de un array y crear uno nuevo.
//Caso de uso: tenemos un array de calificaciones y queremos obtener calificaciones aprobatorias mayores a 6.

let calificaciones = [
    {nombre:"Julian", calificacion:9},
    {nombre:"Juan", calificacion:6},
    {nombre:"Pedro", calificacion:3},
    {nombre:"Emilio", calificacion:10},
    {nombre:"Rafael", calificacion:6},
    {nombre:"Lupita", calificacion:8},
]

let califcacionesAprobatorias = calificaciones.filter(e=> e.calificacion>6);
console.log(califcacionesAprobatorias)

//El find es un array para buscar un elemento dentro de un array y retorna el primero que cumpla con la condición especificada.
//Caso de uso: encontraremos al alumno con el nombre Emilio dentro del array calificaciones.

let nombre=calificaciones.find(function(nombreAlumno){
    return nombreAlumno.nombre =='Emilio';
})
console.log(nombre);

//El reduce es un array que ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
//Caso de uso: ---

let AlumnoQueQueda = calificaciones.reduce( (acumulado, sig) => acumulado + sig.capacidad, 0)
console.log(AlumnoQueQueda);

//El concat ejecuta la función una vez para cada elemento presente en la matriz y devuelve el indice de el elemento.
//Caso de uso: el metodo findIndex busca la calificacion que cuente con la calificacion exacta dada y elimina la calificacion que tenga 8.

let calificacion = calificaciones.findIndex(em => em.calificacion === 10)
calificaciones.splice(calificaciones.findIndex(em => em.calificacion === 8), 1)

console.log(calificaciones)

//El shift elimina el primer elemento de una matriz.
//Caso de uso: 

//promesa

const MiPromesa = new Promise((resolve, reject) => {
    console.log("Trabajando");
    setTimeout(function(){
     resolve("Finalizado");
    },3000);

});

MiPromesa.then(resultado=>{
    return resultado;
}).then(mensaje => {
     console.log(mensaje);
}).catch(message=>{
    console.error(message);
})
