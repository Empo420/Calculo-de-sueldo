const form = document.getElementById("formulario");

form.addEventListener("submit", prima);

function prima(e){

  e.preventDefault();
  
  let formData = new FormData(form);
  let tabla = document.getElementById("miTabla");
  let nuevaFila = tabla.insertRow(-1);
  
  let nuevaCelda = nuevaFila.insertCell(0);
  nuevaCelda.textContent = formData.get("documento");

  nuevaCelda = nuevaFila.insertCell(1);
  nuevaCelda.textContent = formData.get("nombres");

  nuevaCelda = nuevaFila.insertCell(2);
  nuevaCelda.textContent = formData.get("apellidos");

  nuevaCelda = nuevaFila.insertCell(3);
  nuevaCelda.textContent = formData.get("sueldo");

  nuevaCelda = nuevaFila.insertCell(4);
  nuevaCelda.textContent = formData.get("dias");

  nuevaCelda = nuevaFila.insertCell(5);
  nuevaCelda.textContent = formData.get("prima");
};

function sumaDePrimas(){
  let condicion = new Array()
  let total = 0;
  let contador = 0;
  let promedio = 0;
  let celdasPrimas = document.querySelectorAll("td + td + td + td + td + td ");

  for (let i = 0; i < celdasPrimas.length; i++) {
    total += parseFloat(celdasPrimas[i].firstChild.data);
    condicion.push(celdasPrimas[i].firstChild.data);
    contador++;  
  }
    promedio = total / contador;
    document.getElementById("sumaPrima").value = Math.round(total);
    document.getElementById("promedio").value = Math.round(promedio);
    document.getElementById("primaMayor").value = Math.max.apply(null, condicion);
    document.getElementById("primaMenor").value = Math.min.apply(null, condicion);
  }


function calcular(){

  let sueldo = document.getElementById("sueldo").value;
  let dias = document.getElementById("dias").value;
  let operacion =  0;   

  if(sueldo < 1656000)
  {
    operacion =  (parseFloat(sueldo) *  parseFloat(dias) + 97000) / 360 ;
  }

  if(sueldo < 1656000 && dias == 150)
  {
    operacion =  (parseFloat(sueldo) *  (150) + 97000) / 360 ;
  }
  
  else  {
      operacion =  (parseFloat(sueldo) * parseFloat(dias)) / 360 ;
  }
  document.getElementById("prima").value = Math.round(operacion);
}


function reiniciar(){
  
 document.getElementById("documento").value = "";
 document.getElementById("nombres").value = "";
 document.getElementById("apellidos").value = "";
 document.getElementById("sueldo").value = "";
 document.getElementById("dias").value = "";
 document.getElementById("prima").value = "";
}


