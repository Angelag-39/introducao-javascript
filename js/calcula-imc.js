var titulo = (document.querySelector(".titulo"));
			titulo.textContent = "Aparecida Nutricionista";
          
            var pacientes = document.querySelectorAll(".paciente");
            console.log(pacientes);

for( var i=0; i< pacientes.length; i++){
    console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoehvalido = validaPeso(peso);
    var alturaehvalida = validaAltura(altura);
    
    if(!pesoehvalido ){
     console.log("peso invalido!");
        pesoehvalido = false;
        tdImc.textContent = "peso invalido"
        paciente.classList.add("paciente-invalido");
    
    }
    if(!alturaehvalida){
        console.log("altura invalida!");
        alturaehvalida = false;
        tdImc.textContent = "altura invalida"
        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaehvalida && pesoehvalido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}
function validaPeso(peso){
    if(peso >=0 &&  peso <1000){
        return true;
    }else{
        return false;
    }
   
}
function validaAltura(altura){
    if(altura >=0 && altura <3.00){
        return true;
    }else{
        return false;
    }
}




function calculaImc(peso,altura){
    var imc =0;
   imc = peso /( altura * altura );
   return imc.toFixed(2);
}




