    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
  const doctorsToggle = document.getElementById("doctorsToggle");
  const doctorsMenu = document.getElementById("doctorsMenu");

  doctorsToggle.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent link jump
    doctorsMenu.classList.toggle("show");
  });

  // Optional: close menu if clicked outside
  window.addEventListener("click", function (e) {
    if (!doctorsToggle.contains(e.target) && !doctorsMenu.contains(e.target)) {
      doctorsMenu.classList.remove("show");
    }
  });
