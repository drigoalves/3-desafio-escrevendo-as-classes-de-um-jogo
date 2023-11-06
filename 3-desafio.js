class heroi {
    constructor(tipo, ataque, nome, idade) {
        this.tipo = tipo
        this.ataque = ataque
        this.nome = nome
        this.idade = idade
    }
}


const mago = new heroi('Mago', 'magia', 'Merlin', '300 anos')
const guerreiro = new heroi('Guerreiro', 'espada', 'Lancelote', '24 anos')
const monge = new heroi('Monge', 'artes marciais', 'Sohei', '55 anos')
const ninja = new heroi('Ninja', 'shuriken', 'Naruto', '26 anos')


console.log('O ' + mago.tipo + ' atacou usando ' + mago.ataque)
console.log('O ' + guerreiro.tipo + ' atacou usando ' + guerreiro.ataque)
console.log('O ' + monge.tipo + ' atacou usando ' + monge.ataque)
console.log('O ' + ninja.tipo + ' atacou usando ' + ninja.ataque)
