//Mostrando primeiros comandos.
console.log("Olá turma 3 da Ituring!")
console.log("Tudo bem com vocês?")

//Variáveis
//comando let <nome da variável> = (recebe) Valor de dentro 
let nome = "Jô, instrutora de front end"
console.log(nome)

let bananinha = 2
console.log(bananinha)

//Variável booleana
let x = false
let y = true

//Listas
let lista = ["teste", "nome", "idade", 4, "Tiago", "Jô", false, true, x]
//console.log(lista[0])
console.table(lista)

//Mapa
let objetoVoadorNaoIdentificado = {
    "nome": "Tiago Sestari",
    "idade": 30,
    "casado": true
}
console.table(objetoVoadorNaoIdentificado)

console.log(typeof(lista))


Tipagem
let variavel_1 = 10
let variavel_2 = 2
console.log(variavel_1 + variavel_2)
console.log(variavel_1 - variavel_2)
console.log(variavel_1 * variavel_2)
console.log(variavel_1 / variavel_2)

let idade = 15
let temIngresso = false
let tem1Kgdealimento = false
//Condicional
//&& -> and || -> or
if (idade >= 18 && (tem1Kgdealimento == true || temIngresso == true)) {
    console.log("Pode entrar")
} else {
    console.log("não pode entrar")
}
