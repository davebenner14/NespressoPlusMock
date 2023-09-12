document.addEventListener("DOMContentLoaded", () => {
  const flavorGuidePlaceholder = document.getElementById(
    "flavor-guide-placeholder"
  );

  fetch("flavorGuide.html")
    .then((response) => response.text())
    .then((data) => {
      flavorGuidePlaceholder.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching the flavor guide:", error);
    });
});
