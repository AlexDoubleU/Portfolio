var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;

    this.classList.toggle("accactive");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      updateParentHeights(panel, -panel.scrollHeight);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      updateParentHeights(panel, panel.scrollHeight);
    }
  });
}

function updateParentHeights(panel, change) {
  var parentPanel = panel.parentElement.closest(".panel");
  while (parentPanel) {
    parentPanel.style.maxHeight = parseInt(parentPanel.style.maxHeight) + change + "px";
    parentPanel = parentPanel.parentElement.closest(".panel");
  }
}