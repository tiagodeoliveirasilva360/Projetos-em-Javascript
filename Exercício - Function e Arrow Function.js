//  A Função tradicional sem nenhum parâmetro;
function cuidado() {
    console.log('Cuidado!')
  }
  cuidado()
  
  //  A Função tradicional com parâmetros e o retorno;
  function ola(nome) {
    console.log('Olá', nome)
  }
  ola('Tiago')
  
  //  O Arrow function;
  const outro_ola = (nome) => {
    return console.log('Olá', nome)
  }
  outro_ola('Tiago!')