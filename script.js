let currentStep = 1;

function showStep(step) {
  const steps = document.querySelectorAll('.step');
  steps.forEach(s => s.style.display = 'none');

  const stepToShow = document.getElementById(`step${step}`);
  stepToShow.style.display = 'block';

  // Enable the next button when all text boxes in the current step are filled
  const inputFields = document.querySelectorAll(`#step${step} .inputs input`);
  const nextButton = document.getElementById(`next-btn-${step}`);

  inputFields.forEach(input => {
    input.addEventListener('input', function() {
      if (Array.from(inputFields).every(field => field.value.trim() !== '')) {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
    });
  });
}

function nextStep(step) {
  currentStep = step;
  showStep(currentStep);
}

function endExercise() {
  // Hide the Step 5 content and show the congratulatory message
  document.getElementById('step5').style.display = 'none';
  document.getElementById('step6').style.display = 'block';
}

function restartExercise(feelingBetter) {
  if (feelingBetter) {
    alert("You're feeling better! 🌈 Great work!");
  } else {
    alert("No worries! Let's try again and make sure you're fully grounded. 🌿");
  }

  // Reset the page and go back to the first step
  currentStep = 1;
  showStep(currentStep);
}

// Initialize the page by showing the first step
showStep(currentStep);
