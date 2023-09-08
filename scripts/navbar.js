document.addEventListener("DOMContentLoaded", () => {
  // Load the Navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  navbarPlaceholder.innerHTML = `
          <!-- Navbar -->
          <nav class="navbar">
              <div class="navbar-left">
                  <a href="index.html">
                      <img id="logoFull" src="https://image.isu.pub/191018120732-fef611e3af77778e68c74edd3ed7d146/jpg/page_1.jpg" alt="Nespresso"/>
                      <span id="plusText">PLUS</span>
                  </a>
              </div>
              <div class="navbar-right">
                  <ul>
                      <li>Product Guide</li>
                      <li>Sales Tools</li>
                      <li>Video Content</li>
                      <li>Training Tools</li>
                      <li>Learning</li>
                  </ul>
              </div>
          </nav>
      `;
});
