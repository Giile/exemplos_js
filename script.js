let fruta = 'fruta'

fruta = prompt('nome da fruta')

switch (fruta) {
    case 'maçã':
        alert("Não vendemos esta fruta aqui")
        break
    case 'kiwi':
        alert("Estamos com escassez de kiwis")
        break
    case 'melancia':
        alert("Aqui está, são 3 reais o quilo")
        break;
    default:
        alert("Recarregue a página para outros resultados")
}