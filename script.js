const toggleBtn = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

function validateForm() {
  const email = document.querySelector('#contact-email');
  const message = document.querySelector('#contact-message');

  if (!email || !message) {
    return false;
  }

  if (!email.value || !message.value) {
    alert("Please fill in all fields.");
    return false;
  }

  if (!email.value.includes('@')) {
    alert("Please enter a valid email.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#modal-close');

if (modalTrigger.length > 0 && modal && modalClose) {
  modalTrigger.forEach(btn => btn.addEventListener('click', () => {
    modal.classList.add('active');
  }));

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}
