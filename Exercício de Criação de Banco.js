var cliente = {
    nome: 'Tiago',
    login: 'tiagosilva',
    senha: '123456',
    conta: '4117',
    saldo: 50000.00
}

var deposito = function(valor){
   cliente.saldo = cliente.saldo + valor;
}

var saque = function(valor){
    cliente.saldo = cliente.saldo - valor;
}

var extrato = function(){
    console.log('SALDO: ' + cliente.saldo);
}

var consultar_cliente = function(){
    console.log('Nome: ' + cliente.nome);
    console.log('Login: ' + cliente.login);
    console.log('Senha: ' + cliente.senha);
    console.log('Conta: ' + cliente.conta);
    console.log('Saldo: ' + cliente.saldo);
}
//  Consulta completa
consultar_cliente();
//  Desposito e depois consulta
deposito(100);
extrato();
//  Saque
saque(50);
//  Consulta completa
consultar_cliente();