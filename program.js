// Definindo a classe genérica do Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Padroniza para minúsculo
    }

    // Método de ataque conforme as regras do desafio
    atacar() {
        let ataque = "";

        // Estrutura de decisão para definir o tipo de ataque
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido";
        }

        // Exibe a mensagem final exigida
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias (objetos) de diferentes heróis
let heroi1 = new Heroi("Gandalf", 1000, "mago");
let heroi2 = new Heroi("Arthur", 30, "guerreiro");
let heroi3 = new Heroi("Lee", 40, "monge");
let heroi4 = new Heroi("Ryu", 25, "ninja");

// Executando o método atacar para cada um
heroi1.atacar(); // Saída: o mago atacou usando magia
heroi2.atacar(); // Saída: o guerreiro atacou usando espada
heroi3.atacar(); // Saída: o monge atacou usando artes marciais
heroi4.atacar(); // Saída: o ninja atacou usando shuriken