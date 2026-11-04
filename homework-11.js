const subscribeForm = document.getElementById('subscribeForm');

subscribeForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const emailInput = document.getElementById('subscribeEmail');

  if (!emailInput.checkValidity()) {
    alert('Пожалуйста, введите корректный email!');
    return;
  }

  const subscriptionData = {
    email: emailInput.value.trim()
  };

  console.log(subscriptionData);
});

let user = null;

const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const registerForm = document.getElementById('registerForm');

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('modal-showed');
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('modal-showed');
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('modal-showed');
  }
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Регистрация отклонена: пароли не совпадают!');
    return;
  }

  if (!registerForm.checkValidity()) {
    alert('Регистрация отклонена: заполните все поля корректно!');
    return;
  }

  const formData = {
    firstName: registerForm.firstName.value,
    lastName: registerForm.lastName.value,
    birthDate: registerForm.birthDate.value,
    login: registerForm.login.value,
    password: password,
    createdOn: new Date()
  };

  user = formData;

  console.log('Успешная регистрация:', user);

  registerForm.reset();
  modalOverlay.classList.remove('modal-showed');
});