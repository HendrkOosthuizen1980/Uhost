const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
// console.dir(backdrop);
// console.log(selectPlanButtons);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

modalClose.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

toggleButton.addEventListener('click', function () {
  mobileNav.style.display = 'block';
});
