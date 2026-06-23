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

// Scroll-reveal: fade + slide up content as it enters the viewport
(function () {
  var selector =
    ".hero > *, .section-title, .entry, .skills-group, .pub-entry, .interests-text, .interests-imgs, .award-item";
  var targets = Array.prototype.slice.call(document.querySelectorAll(selector));
  if (!targets.length) return;

  targets.forEach(function (el) {
    el.classList.add("reveal");
  });

  var reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("in");
    });
    return;
  }

  // Light stagger within each section so cards cascade rather than pop at once
  document.querySelectorAll(".section").forEach(function (section) {
    var kids = section.querySelectorAll(".reveal");
    kids.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i, 6) * 0.05 + "s";
    });
  });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  targets.forEach(function (el) {
    io.observe(el);
  });

  // Safety net: reveal anything already within the viewport. Guards against
  // elements pinned in the bottom strip that an observer can otherwise miss.
  function sweep() {
    targets.forEach(function (el) {
      if (el.classList.contains("in")) return;
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("in");
        io.unobserve(el);
      }
    });
  }
  window.addEventListener("load", sweep);
  window.addEventListener("scroll", sweep, { passive: true });
})();
