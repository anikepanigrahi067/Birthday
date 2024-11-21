// Optional: Add a fun surprise animation when the user clicks anywhere on the page
document.body.addEventListener('click', () => {
    const confetti = document.createElement('div');
    confetti.innerHTML = '🎉';
    confetti.style.position = 'absolute';
    confetti.style.fontSize = '2em';
    confetti.style.animation = 'fall 3s ease-out forwards';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = '0px';
    document.body.appendChild(confetti);
  
    // Remove confetti after animation
    setTimeout(() => confetti.remove(), 3000);
  });
  
  // Animation for confetti falling
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% { transform: translateY(0); }
      100% { transform: translateY(100vh); }
    }
  `;
  document.head.appendChild(style);
  