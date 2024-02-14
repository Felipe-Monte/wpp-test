
function sendMessage(){
  const inputNumber = document.querySelector("input").value
  
  const message = "Isso é uma menssagem automática"

  var linkWhatsApp = "https://wa.me/" + inputNumber + "?text=" + encodeURIComponent(message);
    
  window.open(linkWhatsApp);
}