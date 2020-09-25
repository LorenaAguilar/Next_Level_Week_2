//Passo a passo
//procurar o botão
document
  .querySelector("#add-time")
  //Quando clicar no botão
  .addEventListener("click", cloneField); //addEventListener => Alguém que vai ouvir o evento
//Primeiro argumento é qual evento estou esperando
//Segundo argumento é o que o programa vai fazer quando o evento for disparado
//Quando clicar no botão

//Executar uma ação
function cloneField() {
  //Duplicar os campos. Que campos?
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  //Pegar os campos para limpar. Que campos?
  const fields = newFieldContainer.querySelectorAll("input");

  //Para cada campo, limpá-lo.
  fields.forEach(function (field) {
    field.value = "";
  });

  //Colocar na página. Onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
