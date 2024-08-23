var nilson = {
  nome: "Nilson Jorge",
  empresa: "Trisolo",
  salario: 1000,
};

var fabiana = {
  nome: "Fabiana Maria",
  empresa: "Roça",
  salario: 600,
};

var joão = {
  nome: "João Batista",
  empresa: "Prefeitura",
  salario: 2000,
};

var users = [nilson, fabiana, joão];

var usuario = users.find((user) => user.salario > 1000); //verificar
console.log(usuario);
