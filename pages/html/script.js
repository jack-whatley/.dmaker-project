// element consts
let nextButton = document.getElementById("next-button");
let submitButton = document.getElementById("submit-button");
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let areaInput = document.getElementById("area-input");

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

    if (areaInput.value == '<button id="button">Submit</button><p id="output"></p>') {

        alert("i would like to take on 5 burly men!!!")

    }

});