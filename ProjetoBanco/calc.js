
class ContaBancaria{
    constructor(){
      this.saldo = localStorage.getItem('saldo') ? parseFloat(localStorage.getItem('saldo')) : 1000; //Verifica se tem algum valor no localStorage já setado nas paginas, se não tiver ele atribui o valor: 1000
      document.getElementById('input-saldo').value = this.saldo;
    }
    
    depositar(valorDeposito){
            this.saldo += valorDeposito;
            localStorage.setItem('saldo', this.saldo); //usado para manter o valor do saldo nas duas paginas
    }

    sacar(valorRetirada){

        if(this.saldo>=valorRetirada){
            this.saldo -= valorRetirada;
            localStorage.setItem('saldo', this.saldo);
        } else{
            alert('Seu saldo é insuficiente! Saldo atual: '+this.saldo)
        }
    }

    consultarSaldo(){
        return this.saldo
    }
}

const realizarAcoes = (acao) => {
    
    if (acao === 'sacar') {
        sacar();
        const valorRetirada = document.getElementById("valorRetirada");
        valorRetirada.value = "";
    } else if (acao === 'depositar') {
       depositar();
       const valorDeposito = document.getElementById("valorDeposito");
       valorDeposito.value = "";
    }s
   
}

const depositar = () => {
    event.preventDefault(); 
    let valorDeposito = parseFloat(document.getElementById('valorDeposito').value);
    conta.depositar(valorDeposito);
    conta.consultarSaldo();
}

const sacar = () => {
    event.preventDefault(); 
    let valorRetirada = document.getElementById('valorRetirada').value;
    conta.sacar(valorRetirada);
    conta.consultarSaldo();
}

const consultarSaldo = () => {
    document.getElementById('input-saldo').value = conta.consultarSaldo();
}

const conta = new ContaBancaria()

setInterval(consultarSaldo); //define um intervalo para mostrar o saldo/ usado para mostrar o saldo no input