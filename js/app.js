// primer trimestre
let numero1 = Number(prompt("ingresa la primera nota del primer trimestre"))
let numero2 = Number(prompt("ingresa la segunda nota del primer trimestre"))
let numero3 = Number(prompt("ingresa la tercera nota del primer trimestre"))
function calculoPrimerTrimestre(n1,n2,n3) {
    let promedio = n1 + n2 + n3
    let resultado = promedio / 3
    console.log("tu promedio del primer trimestre es",resultado);
}
calculoPrimerTrimestre(numero1, numero2, numero3)

// segundo trimestre
let numero1SegundoTrimestre = Number(prompt("ingresa la primera nota del segundo trimestre"))
let numero2SegundoTrimestre = Number(prompt("ingresa la segunda nota del segundo trimestre"))
let numero3SegundoTrimestre = Number(prompt("ingresa la tercera nota del segundo trimestre"))
function calculoSegundoTrimestre(n1,n2,n3) {
    let promedio = n1 + n2 + n3
    let resultado = promedio / 3
    console.log("tu promedio del segundo trimestre es", resultado);
}
calculoSegundoTrimestre(numero1SegundoTrimestre, numero2SegundoTrimestre, numero3SegundoTrimestre)

// tercer trimestre
let numero1TercerTrimestre = Number(prompt("ingresa la primera nota del tercer trimestre"))
let numero2TercerTrimestre = Number(prompt("ingresa la segunda nota del tercer trimestre"))
let numero3TercerTrimestre = Number(prompt("ingresa la tercera nota del tercer trimestre"))
function calculoTercerTrimestre(n1,n2,n3) {
    let promedio = n1 + n2 + n3
    let resultado = promedio / 3
    console.log("tu promedio del tercer trimestre es", resultado);
}
calculoTercerTrimestre(numero1TercerTrimestre , numero2TercerTrimestre, numero3TercerTrimestre)