# lsatividade-01

definição de função: é um bloco do código para tarefas expecificas que podemos aproveitar  para que não os desenvolvedores não precisem escrever a mesmo código diversas vezes

### declaration(forma antiga)

É a forma classica de se declarar qualquer função
```
function soma(x, y) {
    return x + y;
}
```
Deve ser declarada sem uma variável, apenas com os parâmetros.

### expression(forma contemporânea)

```
let nome = function(nome) {
    return "meu nome é " + nome;
}
```
A expression function deve ser criada através de uma variável para, logo em seguida criar uma função que não precisa declarar o nome da função, apenas os parâmetros. 
### arrow(forma moderna)

```
let desconto = (preço, desconto) => {
    return preço - (preço * desconto) / 100
}
```
A arrow function deve ser criada através de uma variável e, logo em seguida, apenas colocar os parâmetros da função com a adição do =>.
