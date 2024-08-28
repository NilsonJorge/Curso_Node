function enviarEmail(corpo, para) {
  setTimeout(() => {
    console.log(`
            Para: ${para}
            ---------------------
            ${corpo}
            ---------------------
            De: Nilon Jorge
            `);
  }, 8000);
}
console.log("Inicio do envio do e-mail");
enviarEmail("Oi, tu ta bão?", "nilson@gmail.com");
console.log("Seu e-mail foi enviado, deve chegar em minutos");
console.log("TUDO OK!");
