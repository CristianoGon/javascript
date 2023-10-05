
// variavel global, por isso nao estão dentro da função.
const calcular = document.getElementById('calcular');



function imc () {

const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

 if (nome !== ''  && altura !== '' && peso !== '') {
   
    const valorIMC = (peso / (altura*altura)).toFixed(1);

    let classificacao = '';

    if ( valorIMC < 18.5 ){
    classificacao ='ABAIXO DO PESO.';
  }else if (valorIMC < 25){
    classificacao='PESO IDEAL.';
  }else if (valorIMC < 30){
    classificacao='LEVEMENTE ACIMA DO PESO.';
  }else if (valorIMC < 35) {
    classificacao= 'OBESIDADE GRAU 1.';
  }else if(valorIMC < 40){
    classificacao= 'OBESIDADE GRAU 2.';
  }else {
    classificacao='OBESIDADE GRA 3.CUIDADO!!!'
  }

    resultado.textContent=`${nome} SEU IMC É ${valorIMC}, ${classificacao}`;
 }
 // validação dos campos, se o nome for diferente quando todos os campos tiver preenchidos quando clicar em calcular 
 // alert preenchido
else {
    resultado.textContent='PREENCHA TODOS OS CAMPOS....'
}
//se nao tiver algum campo preenchido alert, PREENCHA TODOS OS CAMPOS.
}

calcular.addEventListener('click', imc)
// o comando que irar dar inicio a realização do programar é esse.
// O método addEventListener()  permite que você configure funções a
// serem chamadas quando um evento específico acontece, como,
// por exemplo, quando um usuário clica em calcular.
// em seguida chamo a função imc.



resetar.addEventListener('click', resetarCampos); // Adicione um evento de clique ao botão de redefinição


function resetarCampos() {
  // Obtém os campos de entrada e redefine seus valores para vazio (ou outro valor inicial desejado)
  const nomeCampo = document.getElementById('nome');
  const alturaCampo = document.getElementById('altura');
  const pesoCampo = document.getElementById('peso');

  nomeCampo.value = '';
  alturaCampo.value = '';
  pesoCampo.value = '';

  // Limpa a div de resultado
  const resultado = document.getElementById('resultado');
  resultado.textContent = '';
}