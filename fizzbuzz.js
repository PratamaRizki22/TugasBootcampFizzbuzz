document.getElementById("btn").onclick = function() {
  let getValue = document.getElementById("input").value;
  let result;

  if (getValue % 3 === 0 && getValue % 5 === 0 && getValue != 0) {
    result = "fizzbuzz!";
  } else if (getValue % 5 === 0 && getValue != 0) {
    result = "Buzz!";
  } else if (getValue % 3 === 0 && getValue != 0) {
    result = "fizz!";
  }else if (getValue == 0) {
    result = "input tidak boleh 0";
  } else if(isNaN(getValue)){
    result ="hanya boleh input angka"
  } else if (getValue != 0 ) {
    result = getValue, " bukan fizz maupun buzz";
  } 

  alert(result);
};


document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
