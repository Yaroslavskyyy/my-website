// ========== БУРГЕР-МЕНЮ ==========
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });
}

// ========== МОДАЛЬНОЕ ОКНО ==========
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');

function showModal() {
    if (modal) {
        modal.style.display = 'flex';
    }
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

// ========== ФОРМА ЗАЯВКИ ==========
const requestForm = document.getElementById('requestForm');
// ВАША ПРАВИЛЬНАЯ ССЫЛКА ИЗ GOOGLE APPS SCRIPT
const PROXY_URL = 'https://script.google.com/macros/s/AKfycbxeafV9XnC2KWaw3jJ-hKiAY4IpjI2-r27C4XxLWJV8COHsSfm4wWB66F-UQgLg73f7dg/exec';

if (requestForm) {
    requestForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('userName').value;
        const phone = document.getElementById('userPhone').value;
        const tech = document.getElementById('techType').value;
        const comment = document.getElementById('comment').value;
        
        const text = `НОВАЯ ЗАЯВКА НА АРЕНДУ СПЕЦТЕХНИКИ!
        
Имя: ${name}
Телефон: ${phone}
Техника: ${tech || 'Не выбрана'}
Комментарий: ${comment || '---'}`;
        
        try {
            const response = await fetch(PROXY_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text })
            });
            
            if (response.ok) {
                showModal();
                requestForm.reset();
            } else {
                alert('Ошибка отправки. Попробуйте позже.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка соединения. Напишите нам в Telegram.');
        }
    });
}

// ========== КНОПКИ ЗАКАЗАТЬ ==========
const orderBtns = document.querySelectorAll('.btn-order');

orderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const techName = btn.getAttribute('data-name');
        const techInput = document.getElementById('techType');
        if (techInput) {
            techInput.value = techName;
            document.getElementById('request').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== ПЛАВНЫЙ СКРОЛЛ ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
