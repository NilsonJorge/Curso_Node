function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    var hasError = false;
    if (hasError) {
      callback(8, "Erro ao enviar o email");
      return;
    } else {
      callback(8);
    }
  }, 8000);
}
console.log("Inicio do envio do e-mail");
enviarEmail("Opa, tu ta bão?", "nilson@gmail.com", (time, error) => {
  if (error !== undefined) {
    console.log(error);
    return;
  }
  console.log("Email enviado com sucesso!");
  console.log(`tempo: ${time}s`);
});
