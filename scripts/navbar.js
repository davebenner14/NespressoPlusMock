document.addEventListener("DOMContentLoaded", () => {
  // Load the Navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  navbarPlaceholder.innerHTML = `
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
            <li class="dropdown">
            Sales Tools ▼
            <ul class="dropdown-content">
                <li>Sales Tools</li>  
                <li>Demo Guide</li>
                <li>FOC Request</li>
                <li>Request POP</li>
            </ul>
            </li>
            <li class="dropdown">
            Video Content ▼
            <ul class="dropdown-content">
                <li>The Lab</li>
                <li>Seminars Archive</li>
                <li>Product Video</li>
            </ul>
            </li>
            <li class="dropdown">
            Training Tools ▼
            <ul class="dropdown-content">
                <li>Request Training</li>
                <li>Training Feedback</li>
                <li>Review Your Rep</li>
            </ul>
            </li>
            <li class="dropdown">
            Learning ▼
            <ul class="dropdown-content">
                <li>Nespresso Learning</li>
                <li>Nespresso Points</li>
            </ul>
            </li>            
            </ul>
        </div>
    </nav>
    `;
});
