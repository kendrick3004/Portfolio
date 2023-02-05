function takeValue() {
  var x = document.getElementById("form1");
  var texto = "";
  var i;
  for (i = 0; i < x.length; i++) {
      texto += x.elements[i].value + "<br>";
  }
  
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login == "admin" && senha == "admin")
{
  setInterval(function(){
    location.href = "https://api.whatsapp.com/send?phone=5548988508135"; 
  }, 1000);
  document.getElementById('overlay-right').style.display = 'block';
} 
else {
  document.getElementById('overlay-not').style.display = 'block';
  setInterval(function(){
    window.location.reload();
  }, 1000);
}
}