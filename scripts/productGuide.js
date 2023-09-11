document.addEventListener("DOMContentLoaded", () => {
  const productGuidePlaceholder = document.getElementById(
    "product-guide-placeholder"
  );

  fetch("productGuide.html")
    .then((response) => response.text())
    .then((data) => {
      productGuidePlaceholder.innerHTML = data;
    });
});
