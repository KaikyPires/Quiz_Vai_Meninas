// Animate the loading image to scale up
gsap.fromTo(
  "#loading-image",
  { scale: 0.5, opacity: 0 }, // Start small and hidden
  {
    scale: 1, // Resize to normal scale
    opacity: 1,
    duration: 2, // Duration of resizing animation
    delay: 0.5, // Delay slightly for smoother effect
  }
);

// Animate the logo name to appear slowly after the image animation
gsap.fromTo(
  ".logo-name",
  { y: 50, opacity: 0 }, // Start below and hidden
  {
    y: 0, // Move to normal position
    opacity: 1,
    duration: 2,
    delay: 2.5, // Start this after the image has resized
  }
);

// Fade out the entire loading page after a delay
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 5, // Total delay for logo animation to complete
    onComplete: () => {
      window.location.href = 'aulas.html'; // Redirect to main page
    },
  }
);

document.getElementById('startButton').addEventListener('click', function() {
  var svgElement = document.getElementById('animatedSvg');
  svgElement.classList.add('animate');
  // Adicione aqui qualquer outro código necessário para iniciar a animação
});

document.getElementById("redirect-button").addEventListener("click", function() {
  window.location.href = "index.html";
});