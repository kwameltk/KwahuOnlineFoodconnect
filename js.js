// Accordion Functionality
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var plusSign = this.querySelector('.plus-sign'); // Get the plus sign

    if (panel.style.display === "block") {
      panel.style.display = "none";
      plusSign.textContent = "+"; // Change to plus
    } else {
      panel.style.display = "block";
      plusSign.textContent = "-"; // Change to minus
    }
  });
}