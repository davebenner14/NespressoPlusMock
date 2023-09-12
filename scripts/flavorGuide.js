document.addEventListener("DOMContentLoaded", () => {
  const flavorGuidePlaceholder = document.getElementById(
    "flavor-guide-placeholder"
  );

  fetch("flavorGuide.html")
    .then((response) => response.text())
    .then((data) => {
      flavorGuidePlaceholder.innerHTML = data;

      const container = document.querySelector(".flavor-container");

      document
        .getElementById("left-arrow")
        .addEventListener("click", function () {
          container.scrollLeft -= 200;
        });

      document
        .getElementById("right-arrow")
        .addEventListener("click", function () {
          container.scrollLeft += 200;
        });
    })
    .catch((error) => {
      console.error("Error fetching the flavor guide:", error);
    });
});
