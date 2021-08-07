var firstInputOdds = document.getElementById("firstInputOdds");
var firstInputEvens = document.getElementById("firstInputEvens");
var secondInputOdds = document.getElementById("secondInputOdds");
var secondInputEvens = document.getElementById("secondInputEvens");
var firstInputOddsText = document.getElementById("firstInputOdds");
var firstInputEvensText = document.getElementById("firstInputEvens");
var secondInputOddsText = document.getElementById("secondInputOdds");
var secondInputEvensText = document.getElementById("secondInputEvens");
var firstInput = document.getElementById("inputOne");
var secondInput = document.getElementById("inputTwo");


function actionTrigger() {
    var firstInputValue = parseInt(firstInput.value);
    var secondInputValue = parseInt(secondInput.value);
    var resultFirstOddsAdded = 0;
    var resultFirstOddsAddedOutput = "";
    var resultFirstEvensAdded = 0;
    var resultFirstEvensAddedOutput = "";
    var resultSecondOddsAdded = 0;
    var resultsSecondOddsAddedOutput = "";
    var resultSecondEvensAdded = 0;
    var resultsSecondEvensAddedOutput = "";

    for (var i = 1; i < firstInputValue; i += 2) {
        resultFirstOddsAdded += i;
        resultFirstOddsAddedOutput += i + "+"
    }
    for (var i = firstInputValue; i > 2; i -= 2) {
        resultFirstEvensAdded += i;
        resultFirstEvensAddedOutput += i + "+";
    }
    for (var i = secondInputValue; i > 1; i -= 2) {
        resultSecondOddsAdded += i;
        resultsSecondOddsAddedOutput += i + "+";
    }
    for (var i = 0; i < secondInputValue; i += 2) {
        resultSecondEvensAdded += i;
        resultsSecondEvensAddedOutput += i + "+";
    }


    resultFirstEvensAddedOutput = resultFirstEvensAddedOutput.substring(0, resultFirstEvensAddedOutput.length - 1) + "=";
    resultFirstOddsAddedOutput = resultFirstOddsAddedOutput.substring(0, resultFirstOddsAddedOutput.length - 1) + "=";
    resultsSecondEvensAddedOutput = resultsSecondEvensAddedOutput.substring(0, resultsSecondEvensAddedOutput.length - 1) + "=";
    resultsSecondOddsAddedOutput = resultsSecondOddsAddedOutput.substring(0, resultsSecondOddsAddedOutput.length - 1) + "=";


    firstInputOddsText.textContent = resultFirstOddsAddedOutput + resultFirstOddsAdded;
    firstInputEvensText.textContent = resultFirstEvensAddedOutput + resultFirstEvensAdded;
    secondInputOddsText.textContent = resultsSecondOddsAddedOutput + resultSecondOddsAdded;
    secondInputEvensText.textContent = resultsSecondEvensAddedOutput + resultSecondEvensAdded;

}