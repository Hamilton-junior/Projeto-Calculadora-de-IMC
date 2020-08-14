let inputPeso = document.getElementById("weight");
let inputAltura = document.getElementById("height");
let resultado = document.getElementById("results");


document.querySelector("#calc").addEventListener('click',calcular)
function calcular(){
    let resultado2 = "";

    let peso = inputPeso.value;
    let altura = inputAltura.value;

    let imc = peso/(altura*altura);
    let imc_arrendondado = parseFloat(imc.toFixed(2));

    if(imc_arrendondado<18.5){
        resultado2 ="Abaixo do peso, coma mais!";
    }
    else if(imc_arrendondado>=18.5 && imc_arrendondado<=24.9){
        resultado2 = "Peso normal, continue com as boas praticas!";
    }
    else if(imc_arrendondado>=25 && imc_arrendondado<=29.9){
        resultado2 = "Sobrepeso, reveja sua rotina!";
    }
    else if(imc_arrendondado>=30 && imc_arrendondado<=34.9){
        resultado2 = "Obesidade grau 1, procure um médico!";
    }
    else if(imc_arrendondado>=35 && imc_arrendondado<=39.9){
        resultado2 = "Obesidade grau 2, a coisa ta ficando feia, procure um médico já!";
    }
    else if(imc_arrendondado>=40){
        resultado2 = "Obesidade grau 3, procure um médico imediatamente e mude seus habitos!";
    }
    resultado.innerHTML = `<p>Seu IMC é: ${imc_arrendondado}</p>`
    resultado.innerHTML += `<p>${resultado2}</p>`
    resultado.style.display = "block";

    console.log(imc_arrendondado)

}

document.querySelector("#reset").addEventListener('click',resetar)
function resetar() {
    resultado.style.display = "none";
    const fields = document.querySelectorAll('input');
    fields.forEach(function (field) {
        field.value = ""
    })
    
}