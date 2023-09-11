document.addEventListener("DOMContentLoaded", () => {
  const productGuidePlaceholder = document.getElementById(
    "product-guide-placeholder"
  );
  productGuidePlaceholder.innerHTML = `
        <!-- Product Guide section -->
        <div class="responsive-wrapper">
          <div class="product-guide-container">
            <div class="product-guide-content">
              <h2>Product Guide</h2>
              <p>Spec sheets, product information and so much more.</p>
              <a href="#" class="button primary">View Product Guide</a>
              <p>Our highly anticipated Product Guide revamp is coming soon… click to get a sneak peek!</p>
              <a href="#" class="button secondary">Learn More</a>
            </div>
            <div class="product-guide-image">
              <img src="https://www.nespresso.com/ecom/medias/sys_master/public/13108190478366/main-coffee-machine-comparison.jpg" alt="Product Guide Image" />
            </div>
          </div>
        </div>
    `;
});
