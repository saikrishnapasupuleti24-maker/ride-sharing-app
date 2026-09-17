function estimateFare() {
  const pickup = document.getElementById('pickup').value;
  const dropoff = document.getElementById('dropoff').value;
  const resultDiv = document.getElementById('fare-result');

  if (pickup === '' || dropoff === '') {
    resultDiv.textContent = 'Please fill in both location fields.';
    resultDiv.style.color = 'red';
    return;
  }

  // Simulated fare calculation
  const estimatedFare = (Math.random() * 15 + 10).toFixed(2);
  resultDiv.style.color = '#111827';
  resultDiv.textContent = `Estimated Fare from ${pickup} to ${dropoff}: $${estimatedFare}`;
}