const botao = document.querySelector(".executa01")
const botao2 = document.querySelector(".executa02")
const botao3 = document.querySelector(".executa03")
const botao4 = document.querySelector(".executa04")
const botao5 = document.querySelector(".executa05")
const botao6 = document.querySelector(".executa06")
const botao7 = document.querySelector(".executa07")
const botao8 = document.querySelector(".executa08")
const botao9 = document.querySelector(".executa09")
const botao10 = document.querySelector(".executa10")

let soma = () => {
    const resp = document.getElementById("resp01")

    const val1 = document.getElementById("q1v1")
    const val2 = document.getElementById("q1v2")
    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0:parseFloat(val2.value)
    const soma = num1 + num2 
    resp.innerHTML = "Resultado = " + soma 
}

let identifica = () => {
    const resp2 = document.getElementById("resp02")

    const val1 = document.getElementById("q2v1")
    const val2 = document.getElementById("q2v2")
    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0:parseFloat(val2.value)
    let maior = ""
    if (num1 > num2) {
        maior = num1
    } else {
        maior = num2
    }
    resp2.innerHTML = "Maior número = " + maior 
}

let primo = () => {
    const resp3 = document.getElementById("resp03")

    const val1 = document.getElementById("q3v1")
    const num1 = parseInt(val1.value)
    let j = 0

   for (i=1;i<=num1;i++) {
    if (num1 % i == 0 ){
        j++
    }
   }

   if (j==2) {
    resp3.innerHTML = "O número é primo"    
   } else {
    resp3.innerHTML = "O número não é primo"    
   }
     
}

let hipotetusa = () => {
    const resp = document.getElementById("resp04")

    const val1 = document.getElementById("q4v1")
    const val2 = document.getElementById("q4v2")
    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0:parseFloat(val2.value)

    const hipotetusa = Math.sqrt((num1*num1) + (num2*num2)) 
    resp.innerHTML = "Hipotenusa = " + hipotetusa 
}

let salarioCalculo = () => {
    const resp = document.getElementById("resp05")

    const val1 = document.getElementById("q5v1")
    const val2 = document.getElementById("q5v2")
    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0: parseFloat(val2.value)

    const percent = 1+(parseFloat(num2)/100)

    const salario = (num1*percent).toFixed(2) 
    resp.innerHTML = "Salário = R$" + salario 
}

let custoCarro = () => {
    const resp = document.getElementById("resp06")

    const val1 = document.getElementById("q6v1")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)

    const custo = (num1+(num1*0.28)+(num1*0.45)).toFixed(2) 

    resp.innerHTML = "Custo = R$" + custo 
}

let calculoSalario = () => {
    const resp = document.getElementById("resp07")

    const val1 = document.getElementById("q7v1")
    const val2 = document.getElementById("q7v2")
    const val3 = document.getElementById("q7v3")
    const val4 = document.getElementById("q7v4")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0:parseFloat(val2.value)
    const num3 = isNaN(parseFloat(val3.value))? 0:parseFloat(val3.value)
    const num4 = isNaN(parseFloat(val4.value))? 0:parseFloat(val4.value)

    const salario = num3 + (num1*num4) + (0.05*num2) 

    resp.innerHTML = "Salário = R$" + salario 
}

let calculoCelcius = () => {
    const resp = document.getElementById("resp08")

    const val1 = document.getElementById("q8v1")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)

    const celcius = ((num1 - 32)/9) * 5  

    resp.innerHTML = "Celcius = " + celcius + "ºC"
}

let calculoMedia = () => {
    const resp = document.getElementById("resp09")

    const val1 = document.getElementById("q9v1")
    const val2 = document.getElementById("q9v2")
    const val3 = document.getElementById("q9v3")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    const num2 = isNaN(parseFloat(val2.value))? 0:parseFloat(val2.value)
    const num3 = isNaN(parseFloat(val3.value))? 0:parseFloat(val3.value)

    const media = ((num1*2)+(num2*3)+(num3*5))/10 

    resp.innerHTML = "Média = " + media
}

let calculoMaca = () => {
    const resp = document.getElementById("resp10")

    const val1 = document.getElementById("q10v1")

    const num1 = isNaN(parseFloat(val1.value))? 0:parseFloat(val1.value)
    let custo = 0

    if (num1<12) {
        custo = num1*1.3
    } else {
        custo = num1*1
    }

    resp.innerHTML = "Valor = R$" + custo
}




botao.addEventListener("click", () => {
    soma()
})

botao2.addEventListener("click", () => {
    identifica()
})

botao3.addEventListener("click", () => {
    primo()
})

botao4.addEventListener("click", () => {
    hipotetusa()
})

botao5.addEventListener("click", () => {
    salarioCalculo()
})

botao6.addEventListener("click", () => {
    custoCarro()
})

botao7.addEventListener("click", () => {
    calculoSalario()
})

botao8.addEventListener("click", () => {
    calculoCelcius()
})

botao9.addEventListener("click", () => {
    calculoMedia()
})

botao10.addEventListener("click", () => {
    calculoMaca()
})