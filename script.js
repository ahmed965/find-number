(function () {
  //DOM elements
  const inputProposed = document.querySelector(".proposed-number");
  const checkNumber = document.querySelector(".check-number");
  const message = document.querySelector(".message");
  const boxTries = document.querySelector(".box-tries");
  const inputTries = document.querySelector(".tries");

  const numberToFind = Math.floor(Math.random() * 101);
  const tries = [];
  console.log(numberToFind);

  //Events
  checkNumber.addEventListener("click", findTheNumber);

  //Functions
  function showMessage(msg, addClass) {
    message.innerText = msg;
    message.classList.add(addClass);
  }

  function appendNumber(nbr) {
    tries.push(nbr);
  }

  function findTheNumber() {
    const proposedNumber = inputProposed.value;
    if (proposedNumber == "" || proposedNumber > 100 || proposedNumber < 0) {
      showMessage("Please enter a valid number", "not-found");
    } else if (proposedNumber < numberToFind) {
      appendNumber(proposedNumber);
      showMessage("Too low", "not-found");
    } else if (proposedNumber > numberToFind) {
      appendNumber(proposedNumber);
      showMessage("Too high", "not-found");
    } else {
      appendNumber(proposedNumber);
      message.classList.remove("not-found");
      showMessage("You found the number", "found");
      showListTries();
      this.setAttribute("disabled", "");
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
  }

  function showListTries() {
    let listTries = "";
    for (let i = 0; i < tries.length; i++) {
      listTries += "<li>" + tries[i] + "</li>";
    }
    const span = document.createElement("span");
    const choosen = document.createTextNode("your tries were:");
    span.appendChild(choosen);
    boxTries.insertBefore(span, inputTries);
    inputTries.innerHTML = listTries;
    const jsonString = JSON.stringify(tries);
    //console.log(jsonString);
    localStorage.setItem("tries", jsonString);
  }
})();
