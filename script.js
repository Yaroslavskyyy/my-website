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

// ========== ФОРМА ЗАЯВКИ (Telegram) ==========
// 🔧 ЗАМЕНИТЕ НА СВОИ ДАННЫЕ!
const TELEGRAM_BOT_TOKEN = '8672352678:AAFqFgMQ1Mfrd9qY05hkvSa0zhjthpJjk0o'; // Токен от @BotFather
const TELEGRAM_CHAT_ID = '5719571625'; // Ваш ID (узнать у @userinfobot)

const requestForm = document.getElementById('requestForm');

requestForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const tech = document.getElementById('techType').value;
    const comment = document.getElementById('comment').value;
    
    const text = `🆕 НОВАЯ ЗАЯВКА НА АРЕНДУ СПЕЦТЕХНИКИ!
    
👤 Имя: ${name}
📞 Телефон: ${phone}
🚜 Техника: ${tech || 'Не выбрана'}
💬 Комментарий: ${comment || '—'}
    `;
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });
        
        if (response.ok) {
            showModal();
            requestForm.reset();
        } else {
            alert('❌ Ошибка отправки. Попробуйте позже или напишите в Telegram.');
        }
    } catch (error) {
        alert('❌ Ошибка соединения. Напишите нам в Telegram: @spektspark24');
    }
});

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