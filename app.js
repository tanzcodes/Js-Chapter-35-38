// ==========================================
// CHAPTER 35 - 38: FUNCTIONS (FULLY FIXED CODE 1-14)
// ==========================================

// --- Question 1: Current Date & Time ---
document.write("<h3>Question 1: Current Date via Function</h3>");
function displayCurrentDateTime() {
    var now = new Date();
    document.write("Function Output: " + now + "<br><hr>");
}
displayCurrentDateTime();


// --- Question 2: Greeting Function ---
document.write("<h3>Question 2: Greeting Function</h3>");
function greetUser(first, last) {
    var fullName = first + " " + last;
    document.write("Hello, " + fullName + "! Welcome.<br><hr>");
}
var fNameInput = prompt("Enter first name for function greeting:");
var lNameInput = prompt("Enter last name for function greeting:");
greetUser(fNameInput, lNameInput);


// --- Question 3: Addition Return Function ---
document.write("<h3>Question 3: Addition Return Function</h3>");
function addNumbers(num1, num2) {
    return num1 + num2;
}
var val1 = +prompt("Enter first number to add:");
var val2 = +prompt("Enter second number to add:");
var sumResult = addNumbers(val1, val2);
document.write("The sum of " + val1 + " and " + val2 + " is: " + sumResult + "<br><hr>");


// --- Question 4: Mini Calculator Function ---
document.write("<h3>Question 4: Mini Calculator Function</h3>");
function computeValue(n1, n2, operator) {
    var result;
    if (operator === "+") result = n1 + n2;
    else if (operator === "-") result = n1 - n2;
    else if (operator === "*") result = n1 * n2;
    else if (operator === "/") result = n1 / n2;
    else if (operator === "%") result = n1 % n2;
    else result = "Invalid Operator";
    
    document.write("Calculation Result (" + n1 + " " + operator + " " + n2 + "): <b>" + result + "</b><br><hr>");
    return result;
}
var calcNum1 = +prompt("Calculator: Enter first number:");
var calcNum2 = +prompt("Calculator: Enter second number:");
var calcOp = prompt("Calculator: Enter operator (+, -, *, /, %):");
computeValue(calcNum1, calcNum2, calcOp);


// --- Question 5: Square Function ---
document.write("<h3>Question 5: Square Function</h3>");
function squareNumber(x) {
    var sq = x * x;
    document.write("The square of " + x + " is: " + sq + "<br><hr>");
}
var numToSquare = +prompt("Enter a number to square:");
squareNumber(numToSquare);


// --- Question 6: Factorial Function ---
document.write("<h3>Question 6: Factorial Function</h3>");
function calculateFactorial(n) {
    if (n < 0) return "Undefined for negative numbers";
    var factorialResult = 1;
    for (var i = n; i > 1; i--) {
        factorialResult *= i;
    }
    document.write("The factorial of " + n + " is: " + factorialResult + "<br><hr>");
    return factorialResult;
}
var factorialInput = +prompt("Enter an integer to find its factorial:");
calculateFactorial(factorialInput);


// --- Question 7: Counting Display Function ---
document.write("<h3>Question 7: Counting Display Function</h3>");
function displayCounting(start, end) {
    document.write("Counting from " + start + " to " + end + ":<br>");
    if (start <= end) {
        for (var i = start; i <= end; i++) {
            document.write(i + " ");
        }
    } else {
        for (var j = start; j >= end; j--) {
            document.write(j + " ");
        }
    }
    document.write("<br><br><hr>");
}
var startNum = +prompt("Counting: Enter start number:");
var endNum = +prompt("Counting: Enter end number:");
displayCounting(startNum, endNum);


// --- Question 8: Outer & Inner Function to compute Hypotenuse ---
document.write("<h3>Question 8: Hypotenuse (Nested Function)</h3>");
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    var hypotenuseSquare = calculateSquare(base) + calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    
    document.write("Base: " + base + ", Perpendicular: " + perpendicular + "<br>");
    document.write("Hypotenuse: <b>" + hypotenuse.toFixed(2) + "</b><br><hr>");
    return hypotenuse;
}
// FIX: Prompts ko function call se bilkul pehle globally rakha hai
var bInput = +prompt("Hypotenuse: Enter base value:");
var pInput = +prompt("Hypotenuse: Enter perpendicular value:");
calculateHypotenuse(bInput, pInput);


// --- Question 9: Area of Rectangle ---
document.write("<h3>Question 9: Area of Rectangle</h3>");
function calculateAreaOfRectangle(width, height) {
    var area = width * height;
    document.write("Width: " + width + ", Height: " + height + " -> Area: <b>" + area + "</b><br>");
    return area;
}
document.write("<i>i. Arguments passed as direct values (5, 10):</i><br>");
calculateAreaOfRectangle(5, 10);

document.write("<br><i>ii. Arguments passed as variables from prompt:</i><br>");
// FIX: Prompts ko function ke bahar banaya taake variable globally accessible ho
var rectWidth = +prompt("Rectangle: Enter width:");
var rectHeight = +prompt("Rectangle: Enter height:");
calculateAreaOfRectangle(rectWidth, rectHeight);
document.write("<hr>");


// --- Question 10: Palindrome Checker Function ---
document.write("<h3>Question 10: Palindrome Checker</h3>");
function checkPalindrome(str) {
    if (!str) return;
    var cleanStr = str.toLowerCase();
    var reversedStr = cleanStr.split("").reverse().join("");
    
    if (cleanStr === reversedStr) {
        document.write("The word '" + str + "' is a <b>Palindrome</b>.<br><hr>");
    } else {
        document.write("The word '" + str + "' is <b>Not a Palindrome</b>.<br><hr>");
    }
}
var palindromeInput = prompt("Enter a word to check for Palindrome (e.g., madam):");
checkPalindrome(palindromeInput);


// --- Question 11: Title Case Transformation Function ---
document.write("<h3>Question 11: Title Case Transformer</h3>");
function convertToTitleCase(sentence) {
    if (!sentence) return;
    var wordsArray = sentence.toLowerCase().split(" ");
    
    for (var i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }
    
    var titleCasedSentence = wordsArray.join(" ");
    document.write("Original: " + sentence + "<br>");
    document.write("Title Case: <b>" + titleCasedSentence + "</b><br><hr>");
    return titleCasedSentence;
}
var titleCaseInput = prompt("Enter a full sentence to convert to Title Case:");
convertToTitleCase(titleCaseInput);


// --- Question 12: Find Longest Word in a String ---
document.write("<h3>Question 12: Find Longest Word</h3>");
function findLongestWord(strSentence) {
    if (!strSentence) return;
    var words = strSentence.split(" ");
    var longest = words[0];
    
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    document.write("Sentence: " + strSentence + "<br>");
    document.write("Longest Word: <b>" + longest + "</b><br><hr>");
    return longest;
}
var longestWordInput = prompt("Enter a sentence to extract the longest word:");
findLongestWord(longestWordInput);


// --- Question 13: Count Occurrences of a Letter ---
document.write("<h3>Question 13: Letter Occurrence Counter</h3>");
function countLetterOccurrence(stringData, letterToFind) {
    if (!stringData || !letterToFind) return 0;
    var count = 0;
    
    for (var i = 0; i < stringData.length; i++) {
        if (stringData.charAt(i).toLowerCase() === letterToFind.toLowerCase()) {
            count++;
        }
    }
    document.write("String: '" + stringData + "'<br>");
    document.write("Letter '" + letterToFind + "' appeared: <b>" + count + " time(s)</b><br><hr>");
    return count;
}
var sourceText = prompt("Enter main text string:");
var searchLetter = prompt("Enter single letter to count its occurrences:");
countLetterOccurrence(sourceText, searchLetter);


// --- Question 14: Circle Properties (Circumference and Area) ---
document.write("<h3>Question 14: Geometrical Circle Properties</h3>");
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is: <b>" + circumference.toFixed(2) + "</b><br>");
}

function calcArea(radius) {
    var area = Math.PI * (radius * radius);
    document.write("The area is: <b>" + area.toFixed(2) + "</b><br>");
}

var radiusInput = +prompt("Circle: Enter radius value:");
calcCircumference(radiusInput);
calcArea(radiusInput);
document.write("<br>");