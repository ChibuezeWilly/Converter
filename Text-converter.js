const number = document.getElementById("getNumber");
const form = document.querySelector("form");
const output = document.getElementById("output");
const reset = document.getElementById("reset");

const arrayFrom1To9 = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const arrayFrom10To19 = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const arrayFromTens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

form.addEventListener("input", () => {
  let numberValue = number.value;
    //   check if the value is a number and less than our breakpoint.
    if (isNaN(numberValue) || numberValue < 0 || numberValue > 10000 ) {
        alert("Please enter a number between 1 and 10000")
    }
    // create a variable called num that changes the numberValue from text to number

    let num = parseInt(numberValue)
    let result = "";
    // our limit is 10000
    if (num >= 1000) {
        const thousands = Math.floor(num / 1000)
        result += arrayFrom1To9[thousands - 1] + " thousand "
        if (num % 1000 !== 0) {
            result += " "
        }
    }
      if (num >= 100) {
        const hundreds = Math.floor((num % 1000) / 100);
        if (hundreds > 0)
        result += arrayFrom1To9[hundreds - 1] + " hundred "
        if (num % 100 !== 0) {
            result += "and "
        }
    }

    // create an variable that gets the last two digits of the number
    const lastTwoDigits = num % 100
    if (lastTwoDigits >= 10 && lastTwoDigits <= 19) {
        result += " " + arrayFrom10To19[lastTwoDigits - 10]
    } else {
        const tens = Math.floor(lastTwoDigits / 10)
        const ones = lastTwoDigits % 10
        if (tens > 1) {
             result += arrayFromTens[tens]
             if (ones > 0) {
                result += "-" + arrayFrom1To9[ones - 1];
            }
        } else if (ones > 0) {
            result += arrayFrom1To9[ones - 1]
        }
    }

  // Display the result
  result = result.trim();
  console.log(result);
  output.textContent = result;
});

reset.addEventListener("click", clearFields);

function clearFields() {
  number.value = "";
  output.textContent = "";
}

