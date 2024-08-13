//Global: Todo mundo pode usar
//Local: Só a função onde foi declarado pode usá-lo

let name = "Nilson"; // Global, Local e de bloco
// var sobrenome = "Jorge"; // Global , local
const pi = 3.14;
var nome = "Nilson Jorge";

function func1() {
  var sobrenome = "Leão";
  console.log("Oi " + nome + " " + sobrenome);
}

function func2() {
  console.log("Olá " + nome + " " + sobrenome);
}

func1();
func2();
