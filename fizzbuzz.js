document.getElementById("btn").onclick = function() {
  let test = document.getElementById("inpus").value;
  let result;

  if (test % 3 === 0 && test % 5 === 0 && test != 0) {
    result = "fizzbuzz!";
  } else if (test % 5 === 0 && test != 0) {
    result = "Buzz!";
  } else if (test % 3 === 0 && test != 0) {
    result = "fizz!";
  } else if (test != 0) {
    result = test;
  } else if (test == 0) {
    result = "invalid input";
  }

  alert(result);
};
