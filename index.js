
function sendMessage(){
  const inputNumber = document.querySelector("#number").value
  const name = document.querySelector("#name").value

  if(inputNumber === "" || name === "") {
    alert("Campo vazio preencha os dados!")
    return
  }
  
  const message = `Olá ${name} Isso é uma menssagem automática criada para cobrar contas em atraso !`

  var linkWhatsApp = "https://wa.me/" + `+5584${inputNumber}` + "?text=" + encodeURIComponent(message);
    
  window.open(linkWhatsApp);
}