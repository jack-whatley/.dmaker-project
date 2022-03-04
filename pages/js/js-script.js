// variables
let nextButton = document.getElementById("next-button");
let nextButton2 = document.getElementById("next-button2");
let submitButton = document.getElementById("submit-button");
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let areaInput1 = document.getElementById("area-input1");
let areaInput2 = document.getElementById("area-input2");
let codeDone = false;
let goodCode = document.getElementById("good-code");
let badCode = document.getElementById("bad-code");

// code
nextButton.addEventListener("click", function() {

    slide1.classList.add("hidden");
    nextButton.classList.add("hidden");
    slide2.classList.remove("hidden");
    submitButton.classList.remove("hidden");

});

submitButton.addEventListener("click", function() {

    if (areaInput1.value === 'button.addEventListener("click", function() {' && areaInput2.value === 'output.innerHTML = input.value;') {

        goodCode.classList.remove("hidden");
        badCode.classList.add("hidden");
        submitButton.classList.add("hidden");
        nextButton2.classList.remove("hidden");
        codeDone = true;

    } else {

        goodCode.classList.add("hidden");
        badCode.classList.remove("hidden");

    }

});

const input = document.forms["form"]["text-input"];
const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function() {

    if (codeDone === true) {

        output.innerHTML = input.value;

    }

});