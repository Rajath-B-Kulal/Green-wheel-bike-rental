const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', () => {
  slider.scrollBy({ left: 270, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  slider.scrollBy({ left: -270, behavior: 'smooth' });
});

function selectBike(bikeName) {
  document.getElementById('bike').value = bikeName;
  window.location.hash = 'booking';
}

document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const bike = document.getElementById('bike').value;
  const name = document.getElementById('name').value;
  const mobile= document.getElementById('number').value;
  const hours = document.getElementById('hours').value;
  const confirmation = document.getElementById('confirmation');

  confirmation.innerHTML = `
    <p>Thank you <strong>${name}</strong>! You booked a <strong>${bike}</strong> for <strong>${hours} hours</strong>.</p>
    <p>We will contact you at <strong>${mobile}</strong> to confirm your booking.</p>
    <p>Enjoy your ride!</p>
  `;
  confirmation.style.display = 'block';
  confirmation.style.backgroundColor = '#d4edda';
  confirmation.style.padding = '20px';
  confirmation.style.borderRadius = '5px';
  confirmation.style.marginTop = '20px';
  confirmation.style.color = '#155724';
  confirmation.style.border = '1px solid #c3e6cb';
  confirmation.style.fontSize = '1.2em';
  
  this.reset();
});