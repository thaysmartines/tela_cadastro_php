const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')

function setError(index){
  campos[index].style.border = '2px solid #d10c0c';
  spans[index].style.display = 'block';

}

function removeError(index){
  campos[index].style.border = '2px solid green';
  spans[index].style.display = 'none';
}

function nameValidate(){
  if(campos[0].value.length < 3)
  {
    setError(0);
  }
  else
  {
    removeError(0)
  }
  
}
function mostrarSenha() {
  var senha = document.getElementById("password");
       if (senha.type === "password" ) {
            senha.type = "text";
          } else {
            senha.type = "password";
          }
   }

// Add an event listener to the "Entrar" button
entrarBtn.addEventListener('click', function () {
  nameValidate();
  // Add other validation functions if needed
});