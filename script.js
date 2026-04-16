// ========== БУРГЕР-МЕНЮ ==========
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
});

// ========== МОДАЛЬНОЕ ОКНО ==========
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');

function showModal() {
    modal.style.display = 'flex';
}

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

https://github.com/Yaroslavskyyy/my-website

// ========== КНОПКИ "ЗАКАЗАТЬ" В КАРТОЧКАХ ==========
const orderBtns = document.querySelectorAll('.btn-order');

orderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const techName = btn.getAttribute('data-name');
        document.getElementById('techType').value = techName;
        document.getElementById('request').scrollIntoView({ behavior: 'smooth' });
    });
});

// ========== ПЛАВНЫЙ СКРОЛЛ ДЛЯ ЯКОРЕЙ ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
