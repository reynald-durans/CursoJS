var idade = 66;
console.log('________________________');
console.log(`Você tem ${idade} anos.`);
console.log('________________________');
if (idade < 16) {
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {
    console.log('Voto opicional');
} else {
    console.log('Voto obrigatório');
}