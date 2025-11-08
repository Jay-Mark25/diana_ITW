var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle the "active" class on the button
    this.classList.toggle("active");

    // Get the panel right after the button
    var panel = this.nextElementSibling;

    // If panel is open, close it
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // If panel is closed, open it to its full height
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}