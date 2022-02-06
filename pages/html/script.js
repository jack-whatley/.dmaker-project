// element consts
let nextButton = document.getElementById("next-button");
let submitButton = document.getElementById("submit-button");
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let areaInput1 = document.getElementById("area-input1");
let areaInput2 = document.getElementById("area-input2");
let goodCode = document.getElementById("good-code");
let badCode = document.getElementById("bad-code");
let nextSection = document.getElementById("section-button");
let button = document.getElementById("button");
let output = document.getElementById("output");

let input = '<button id="button">Submit</button> <p id="output"></p>';

// hiding code
nextButton.addEventListener("click", function() {

    // adding hidden
    slide1.classList.toggle("hidden");
    nextButton.classList.toggle("hidden");
    
    // removing hidden
    slide2.classList.remove("hidden");
    submitButton.classList.remove("hidden");

});

submitButton.addEventListener("click", function() {

    if (areaInput1.value == '<button id="button">Submit</button>' && areaInput2.value == '<p id="output"></p>') {

        goodCode.classList.remove("hidden");
        submitButton.classList.add("hidden");
        badCode.classList.add("hidden");
        nextSection.classList.remove("hidden");
        button.classList.remove("hidden");
        output.classList.remove("hidden");

    } else {

        goodCode.classList.add("hidden");
        badCode.classList.remove("hidden");

    }

});