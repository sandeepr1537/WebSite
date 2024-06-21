    <!-- JavaScript code to handle menu toggle and hover sounds -->
    <script>
$(document).ready(function() {
  let menuToggle = document.querySelector(".menuToggle");
  let menu = document.querySelector(".menu");

  menuToggle.onclick = function () {
    menu.classList.toggle("active");
  };
});

    </script>

    <!-- Ionicons for menu icons -->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
