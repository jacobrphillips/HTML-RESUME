// GreenSock Animation
gsap.from("#greeting-title", {
  duration: 1,
  opacity: 0,
  y: -50,
  ease: "power2.out",
});
gsap.from("#visited", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power2.out",
  delay: 0.5,
});

// Function to update visit count and display it
function updateVisitCount() {
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  document.getElementById(
    "visited"
  ).textContent = `and this page has been visited ${visitCount} times :)`;
}

// Event listener for button click
document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  gsap.to(window, { duration: 1, scrollTo: { y: "#resume", offsetY: -45 } });
});

// Initial call to update visit count when the page loads
updateVisitCount();
