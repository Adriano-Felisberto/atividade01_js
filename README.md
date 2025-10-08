# FuncoesJs

Definição de função: é um bloco de código destinado a realizar tarefas específicas, que podemos reaproveitar para que os desenvolvedores não precisem escrever o mesmo código varias vezes.
As funções recebem parâmetros, que são valores de entrada e devem retornar algum resultado. Os valores passados para a função são denominados argumentos.
## formula de declaração de funções

```js
function nome_da_função(parametros) {

}
```
### declaration(forma antiga)

É a forma classica de se declarar qualquer função
```js
function soma(x, y) {
    return x + y;
}

console.log(soma(2,2))

```
Deve ser declarada com o nome da função e seus parâmetros, se necessário.
Esse tipo de função tem hoisting, ou seja, independentemente do lugar onde o código esteja, o JavaScript vai “puxar” a função caso ela seja chamada é porque ele “move” a função para o topo durante a execução.

### expression(forma contemporânea)

```js
let nome = function(nome) {
    return "meu nome é " + nome;
}

console.log(nome("joão"))
```
A function expression deve ser criada através de uma variável, que recebe a função.
dessa maneira, não é preciso declarar o nome da função, apenas passar os parâmetros se necessário.
O nome da função é opcional, se não for declarado a função continua funcionando normalmente.

### arrow(forma moderna)

```js 
let desconto = (preço, desconto) => {
    return preço - (preço * desconto) / 100
}
console.log(desconto(500, 15))

```

## exemplo de apenas uma linha da arrow
```js
let divisão = (n1, n2) => n1 / n2
console.log(divisão(20, 2))
```
A arrow function deve ser criada através de uma variável e em seguida, recebe os parâmetros entre parênteses, seguidos do operador =>.
O corpo da função pode ser uma expressão ou um bloco de código com return.

