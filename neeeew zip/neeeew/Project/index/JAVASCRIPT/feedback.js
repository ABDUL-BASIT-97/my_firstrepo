const feedbackForm = document.querySelector('.feedback-form');

// Add mousemove event to create dynamic 3D rotation based on cursor
feedbackForm.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = feedbackForm.getBoundingClientRect();
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;

  feedbackForm.style.transform = `rotateX(${y / 15}deg) rotateY(${x / 15}deg)`;
});

// Reset the form's rotation when the mouse leaves the form area
feedbackForm.addEventListener('mouseleave', () => {
  feedbackForm.style.transform = 'rotateX(0) rotateY(0)';
});

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the form from actually submitting
  alert("Thank you for your feedback!");
});