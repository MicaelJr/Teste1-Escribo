function calculoArray() {
  const enteredValue = parseInt(userValue.value);
  if (enteredValue <= 0) {
    alert("Por favor, insira um valor positivo inteiro!");
    exit();
  }
  let allValues = [];

  for (let initial = 1; initial < enteredValue; initial++) {
    if (initial % 3 == 0 || initial % 5 == 0) allValues.push(initial);
  }

  let sumTotal = allValues.reduce(
    (accumulator, value) => accumulator + value,
    0
  );

  //div onde o resultado vai aparecer
  showResult.innerHTML = `
        <h1> ${sumTotal}</h1>
    `;
}
//adicionando um evento de click ao botao id=btnCalcular onde ele chama a function calcularpratos
btnsumTotal.addEventListener("click", calculoArray);
