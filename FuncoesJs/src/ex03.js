// Arrow Function

let desconto = (preço, desconto) => {
    return preço - (preço * desconto) / 100
}
console.log(desconto(500, 15))

let divisão = (n1, n2) => n1 / n2

console.log(divisão(20, 2))
