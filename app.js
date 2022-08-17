function calcular (){

let imc;
const resultado = document.querySelector('[data-calc]');
const altura = parseInt(document.getElementById('altura').value);
const peso = parseInt(document.getElementById('peso').value);

document.getElementById('altura-val').textContent = altura + " cm";
document.getElementById('peso-val').textContent = peso + " kg"

imc = (peso / Math.pow( (altura/100), 2)).toFixed(1);
result.textContent = imc 

    if(imc < 18.5){
        category = "Abaixo do peso"
    }

    else if (imc >= 18.5 && imc <= 24.9){
        category = "Peso normal"
    }

    else if (imc >= 25 && imc <= 29.9){
        category = "Sobrepeso"
    }

    else {
        category = "Obesidade"
    }

    document.getElementById('category').textContent = category;
}