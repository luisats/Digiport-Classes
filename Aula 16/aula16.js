class Pessoa {
    andar() {
        console.log('Pessoa andando');
    }   
}
 
class Estudante extends Pessoa {
    estudar() {
        console.log('Estudante estudando');
    }
}
 
const estudante = new Estudante();
estudante.andar(); // Saída: Pessoa andando
estudante.estudar(); // Saída: Estudante estudando
 
 
 
 