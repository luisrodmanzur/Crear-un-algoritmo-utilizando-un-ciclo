let helado = 1.90;
let precio = 0;
let precioFinal = 0;

let eleccion = prompt("Buenas tardes, ¿Que topping desea agregar a su helado?")

if (eleccion == "oreo") {
  precio = 1;
}else if(eleccion == "kitkat"){
  precio = 1.50;
}else if(eleccion == "brownie"){
  precio = 0.75;
}else if(eleccion == "frambueza"){
  precio = 0.95;
}else{
  console.log(`Lo siento, no tenemos ese topping`)
}

precioFinal = helado + precio;
console.log(`El precio final de su helado es ${precioFinal}`)

