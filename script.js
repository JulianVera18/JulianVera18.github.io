let resultado = 0;
let creditos = 0;

function convertir(){
  let cantidad = parseFloat(document.getElementById("cantidadInput").value);
  let Lvalue = parseFloat(document.getElementById("lingoValue").value) || 1.5;
  let opcion = document.getElementById("conversionType").value;

  if (opcion === "lingosToUSDT"){
    resultado = cantidad * Lvalue;
    creditos = cantidad * 50;
    console.log(resultado);
    document.getElementById("resultado").innerText = "Resultado: " + resultado + " USDT\n" + creditos + " créditos";
  }else if (opcion === "usdtToLingos"){
    resultado = cantidad / Lvalue;
    creditos = resultado * 50;
    console.log(resultado);
    document.getElementById("resultado").innerText = "Resultado: " + resultado + " Lingos\n" + creditos + " créditos";
  }else if (opcion === "creditsToUSDT"){
    resultado = (cantidad/50) * Lvalue;
    creditos = cantidad / 50;
    console.log(resultado);
    document.getElementById("resultado").innerText = "Resultado: " + resultado + " USDT\n" + creditos + " Lingos";
  }
}

function cambiarLabel(){
  var opcionSeleccionada = document.getElementById("conversionType").value;
  var label = document.querySelector('label[for="cantidadInput"]');

  if (opcionSeleccionada === "lingosToUSDT") {
    label.innerText = "Cantidad de Lingos:";
  } else if (opcionSeleccionada === "usdtToLingos") {
    label.innerText = "Cantidad de USTD:";
  } else if (opcionSeleccionada === "creditsToUSDT"){
    label.innerText = "Cantidad de créditos:";
  }
}
