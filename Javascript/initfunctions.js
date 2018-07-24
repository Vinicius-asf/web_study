// escrever três funções:
// factorial(<numero>) - calcula o fatorial do <numero>
// isEven(<numero>) - checa se o <numero> é par (se sim, retorna true e, caso não, retorna falso)
// kebabToSnake(<string>) - transforma uma string do estilo "kebab" para o estilo "snake"

function factorial(number) {
    var result = 1;
    for (var i = number; i>0; i--){
        result *= i;
    }
    return result;
}

function isEven(number){
    return number%2==0;
}

function kebabToSnake(str){
    var newStr = str.replace(/-/g,"_");
    return newStr;
}