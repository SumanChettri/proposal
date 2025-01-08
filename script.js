const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseenter", () => {
  const container = document.querySelector(".proposal-container");
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  // Calculate random positions within the container
  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Apply the random position
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

document.getElementById("yesButton").addEventListener("click", () => {
  alert("I love you too! 😂 😂 😂");
});