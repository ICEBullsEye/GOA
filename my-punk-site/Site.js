// Basic GSAP animation for the hero elements
gsap.from(".hero-content h2", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5,
  });
  gsap.from(".hero-content p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
  });
  
  // Parallax effect on .parallax-bg
  window.addEventListener("scroll", () => {
    const parallax = document.querySelector(".parallax-bg");
    if (!parallax) return;
    let scrollPosition = window.pageYOffset;
    // Adjust speed to taste
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });
  