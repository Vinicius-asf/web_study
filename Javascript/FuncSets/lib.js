function printReverse(arr){
    //recebe uma array e printa ela ao contrário
    for(i = arr.lenght()-1;i >= 0; i--){
        console.log(arr[i]);
    }
}

function isUniform(arr){
    //retorna verdadeiro quando uma array tem todos os seus componentes iguais
    //retorna falso quando um ou mais componentes são diferentes entre si
    arr.forEach(function(value,ind){
        if(value!==arr[0]){
            console.log(false);
            break;
        }
        else if(ind == arr.lenght()-1){
            console.log(true);
        }
    });
}

function sumArray(arr){
    //retorna a soma dos números na array
    //assuma-se que a array é feita somente de números
    var sum = 0;
    arr.forEach(function(val){
        sum += val;
    });
    console.log(sum);
}

function max(arr){
    //retorna o maior número da função
    //assuma-se que a array é feita somente de números
    var chkMax = arr[0];
    arr.forEach(function(val){
        if(val > chkMax){
            chkMax = val;
        }
    });
    console.log(chkMax);
}

var numD = [1,2,3,4,5,6,7,8,9,10];
var numE = [1,1,1,1,1,1];

var wordsD = ["check","hey","done"];
var letters = ["a","a","a"];

var input = prompt("Which function you want to test?");

while(input !== "quit"){
    if (input === 1){
        printReverse(numE);
        printReverse(wordsD);
    }
    
    else if (input === 2){
        isUniform(numD);
        isUniform(numE);
        isUniform(letters);
        isUniform(wordsD);
    }
    
    else if (input === 3){
        sumArray(numD);
        sumArray(numE);
    }

    else if (input === 4){
        max(numeE);
        max(numD);
    }
    var input = prompt("Which function you want to test?");
}