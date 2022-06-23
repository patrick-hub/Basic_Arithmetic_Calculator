let num = parseInt(prompt("Enter a Number"));;


function operateNum() {

  let operation = (prompt("Enter an operation (+,-,*,/): "));
  let number = parseInt(prompt("Enter a Number")); 
  
  if (operation === "+") {
    num += number;
    document.write("The sum is: " + num + "<br>")
  }
  
  else if (operation === "-") {
    num -= number;
    document.write("The difference is: " + num + "<br>")
  }

  else if (operation === "*") {
    num *= number;
    document.write("The product is: " + num + "<br>")
  }
  
  else if (operation === "/") {
    num -= number;
    document.write("The division is: " + num + "<br>")
  }
}

operateNum()









