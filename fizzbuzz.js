let ul = document.getElementById("tulisan");
document.getElementById("btn").onclick = function () {
  let test = document.getElementById("inpus").value;

  if (test % 3 == 0 && test % 5 == 0 && test != 0) {
    ul.insertAdjacentHTML(
      "afterbegin",
      "<li><span>" + "fizzbuzz!" + "</span></li>"
    );
  } else if (test % 5 == 0 && test != 0) {
    ul.insertAdjacentHTML(
      "afterbegin",
      "<li><span>" + "Buzz!" + "</span></li>"
    );
  } else if (test % 3 == 0 && test != 0) {
    ul.insertAdjacentHTML(
      "afterbegin",
      "<li><span>" + "fizz!" + "</span></li>"
    );
  } else if (test != 0) {
    ul.insertAdjacentHTML("afterbegin", "<li><span>" + test + "</span></li>");
  } else if (test == 0) {
    ul.insertAdjacentHTML(
      "afterbegin",
      "<li><span>" + "invalid input" + "</span></li>"
    );
  }
};
