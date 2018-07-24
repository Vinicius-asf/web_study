console.log("Connected!");
var Todos = ["Do all courses"];
var input = 0;
while (input !== "quit") {
    input = prompt("What would you like todo?");
    if (input === "list") {
        Todos.forEach(function(TD,i){
            console.log((i+1)+"-"+TD);

        });
    }
    else if (input === "new") {
        var newTD = prompt("What would you like to do?");
        Todos.push(newTD);
        console.log(Todos);
    }
    else if(input === "delete"){
         var index = prompt("Which is the number of the todo to kill?");
         Todos.splice(index-1,1);
    }
}
console.log("Quit the app! Bye!! :)")