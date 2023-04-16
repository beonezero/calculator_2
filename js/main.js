const inputOne = document.querySelector(".numberOne");
const inputTwo = document.querySelector(".numberTwo");
const mySelect = document.querySelector(".mySelect");
const myButton = document.querySelector(".myButton");
const myResult = document.querySelector(".myResult");

myButton.addEventListener("click", function () {
  const a = Number(inputOne.value);
  const b = Number(inputTwo.value);
  const operation = mySelect.value;

  const result = calculate({
    a,
    b,
    operation,
  });

  myResult.innerText = result;
});
