function calculadora(){
    const operacao = prompt('Escolha um operação aritmética:\n 1-soma(+)\n 2-Subtração(-)\n 3-Multiplicação(*)\n 4-Divisão Real(/)\n 5-Divisão Inteira(%)\n 6-Potenciação(**)');

    let n1 = Number(prompt("Insira o primeiro valor: "));
    let n2 = Number(prompt("Insira o segundo valor: "));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`${n1}+${n2} = ${resultado}`)
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1}-${n2} = ${resultado}`)
    }
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1}*${n2} = ${resultado}`)
    }
    function divisao_real(){
        resultado = n1 / n2;
        alert(`${n1}/${n2} = ${resultado}`)
    }
    function divisao_inteira(){
        resultado = n1 % n2;
        alert(`${n1}%${n2} = ${resultado}`)
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1}**${n2} = ${resultado}`)
    }



    if (operacao == 1){
        soma();
        } else if (operacao == 2){
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    } else if (operacao == 4){
        divisao_real();
    } else if (operacao == 5){
        divisao_inteira();
    } else if (operacao == 6){
        potenciacao();
    }

}

calculadora();
