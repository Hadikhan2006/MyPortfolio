// Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader")
  preloader.style.opacity = "0"
  setTimeout(() => {
    preloader.style.display = "none"
  }, 500)
})

// Custom Cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX - 16 + "px"
      cursorFollower.style.top = e.clientY - 16 + "px"
    }, 100)
  })

  // Hover effects
  const hoverElements = document.querySelectorAll("a, button, .portfolio-card")
  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)"
      cursorFollower.style.transform = "scale(1.5)"
    })

    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)"
      cursorFollower.style.transform = "scale(1)"
    })
  })
})

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Portfolio Filter
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      btn.classList.add("active")

      const filterValue = btn.getAttribute("data-filter")

      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block"
          item.style.opacity = "1"
          item.style.transform = "scale(1)"
        } else {
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })
})

// Particles Background
// Assuming particlesJS is included via a script tag or CDN
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  retina_detect: true,
})

// Initialize AOS
// Assuming AOS is included via a script tag or CDN
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
})

// Skills Progress Animation
const animateProgress = () => {
  const progress = document.querySelectorAll(".progress-bar")
  progress.forEach((item) => {
    const value = item.style.width
    item.style.width = "0"
    setTimeout(() => {
      item.style.width = value
    }, 100)
  })
}

// Trigger progress animation when in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateProgress()
    }
  })
})

document.querySelectorAll(".skills").forEach((skill) => {
  observer.observe(skill)
})

// Parallax Effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector(".hero")
  const limit = parallax.offsetTop + parallax.offsetHeight
  if (scrolled > parallax.offsetTop && scrolled <= limit) {
    parallax.style.backgroundPositionY = (scrolled - parallax.offsetTop) / 1.5 + "px"
  }
})

// NEW FEATURE: Animated Text Typing Effect
document.addEventListener("DOMContentLoaded", function() {
  // Assuming Typed.js is included via a script tag or CDN
  const typedElement = document.querySelector('.typed-text');
  if (typedElement) {
    const typed = new Typed('.typed-text', {
      strings: ['Designer', 'Developer', 'Freelancer', 'Creator'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }
});

// NEW FEATURE: Tilt Effect for Portfolio Cards
document.addEventListener("DOMContentLoaded", function() {
  // Assuming VanillaTilt is included via a script tag or CDN
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(card => {
    VanillaTilt.init(card, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3
    });
  });
});

// NEW FEATURE: Animated Counter for Stats
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.counter-value');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-count'));
        let count = 0;
        const updateCount = () => {
          const increment = countTo / 100;
          if (count < countTo) {
            count += increment;
            target.innerText = Math.ceil(count);
            setTimeout(updateCount, 10);
          } else {
            target.innerText = countTo;
          }
        };
        updateCount();
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});

// NEW FEATURE: Scroll Progress Indicator
document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrollPercentage + '%';
    });
  }
});

// NEW FEATURE: Interactive Service Cards
document.addEventListener("DOMContentLoaded", function() {
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.service-details').classList.add('show');
      card.querySelector('.icon').classList.add('animate-icon');
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.service-details').classList.remove('show');
      card.querySelector('.icon').classList.remove('animate-icon');
    });
  });
});

// NEW FEATURE: Dynamic Background Color Change on Scroll
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');
  const colors = ['#0a0a0a', '#0f0f0f', '#0a0a0a', '#0f0f0f', '#0a0a0a'];
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + (window.innerHeight / 2);
    
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        document.documentElement.style.setProperty('--dynamic-bg', colors[index % colors.length]);
      }
    });
  });
});
