const spoilerPopup = document.getElementById("spoiler-popup");
const continueButton = document.getElementById("continue-button");


// Check if the user has already accepted the warning

if (localStorage.getItem("spoilerAccepted") === "true") {
    spoilerPopup.style.display = "none";
}


// When the user clicks "OK, CONTINUE"

continueButton.addEventListener("click", function () {

    localStorage.setItem("spoilerAccepted", "true");

    spoilerPopup.style.display = "none";

});
