var nome = "Nilson Jorge";
var idade = 20;
var empresa = {
  nome_emp: "Trisolo",
  cidade: "Catalão",
  site: "www.trisolo.com",
  email: "trisolo@trisolo.com",
};

var user = {
  nome,
  idade,
  ...empresa,
};

console.log(user);
