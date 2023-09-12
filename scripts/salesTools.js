document.addEventListener("DOMContentLoaded", () => {
  fetch("salesTools.html")
    .then((response) => response.text())
    .then((data) => {
      const salesToolsPlaceholder = document.getElementById(
        "sales-tools-placeholder"
      );
      salesToolsPlaceholder.innerHTML = data;
    });
});
