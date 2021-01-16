const inputWeight = document.querySelector('[data-input="weight"]');
const inputHeight = document.querySelector('[data-input="height"]');
const buttonCalculate = document.querySelector('[data-calc="calculate"]');
const buttonReset = document.querySelector('[data-calc="reset"]');
const resultImc = document.querySelector('[data-results="imc"]');
const resultEvaluation = document.querySelector('[data-results="evaluation"]');
let evaluation = '';
function imc() {
    let imc = +inputWeight.value / (+inputHeight.value * +inputHeight.value);
    imc = imc.toFixed(2);
    evaluationImc(imc);

    resultImc.innerText = `${imc}`;
    resultEvaluation.innerText = `${evaluation}`;
}
function evaluationImc(imc){
    if(imc < 18.5){
        evaluation = 'Magreza, coma mais!';
    } else if(imc >= 18.5 && imc < 24.9){
        evaluation = 'Normal, continue assim!';
    } else if(imc >= 24.9 && imc < 30){
        evaluation = 'Sobrepeso, cuide melhor da sua saúde!';
    } else {
        evaluation = 'Obesidade, procure um médico!';
    }
    return evaluation;
}
function clearValues() {
    inputHeight.value =  '';
    inputWeight.value = '';
    resultImc.innerText = '';
    resultEvaluation.innerText = '';      
}
buttonCalculate.addEventListener('click', imc);
buttonReset.addEventListener('click', clearValues);