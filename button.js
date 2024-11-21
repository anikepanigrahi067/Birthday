// Grab the "No" button
const noButton = document.getElementById('no-btn');

// Add mouseover event to make the "No" button move
noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * 300 - 150; // Random X position (-150px to 150px)
  const randomY = Math.random() * 300 - 150; // Random Y position (-150px to 150px)

  // Apply new position to the button
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  noButton.style.transition = 'transform 0.3s ease';
});

// Add click event for "Yes" button
document.getElementById('yes-btn').addEventListener('click', () => {
  alert('Yay! I knew it! 🥳💖');
});

// Prevent "No" button from being clicked
noButton.addEventListener('click', () => {
  alert('Oops! Try the other button. 😜');
});
