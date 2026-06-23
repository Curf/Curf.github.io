(function () {
  const toggle = document.getElementById("navToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (!toggle || !sidebar || !overlay) return;

  function open() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
    toggle.innerHTML = '<i class="fas fa-times"></i>';
  }

  function close() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
    toggle.innerHTML = '<i class="fas fa-bars"></i>';
  }

  toggle.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) {
      close();
    } else {
      open();
    }
  });

  overlay.addEventListener("click", close);

  // Close on nav link click
  sidebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", close);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll(".section");
  const navLinks = sidebar.querySelectorAll(".sidebar-nav a");

  function updateActiveLink() {
    let current = "";
    sections.forEach(function (section) {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
})();
