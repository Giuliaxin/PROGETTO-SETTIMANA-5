// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.


window.addEventListener('scroll', function() {
    const header = document.getElementById('site-header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Modale Richiedi Preventivo
const openModalBtn = document.querySelector('.btn-hero');
const modalOverlay = document.getElementById('quote-modal');
const closeModalBtn = document.querySelector('.close-modal');
const quoteForm = document.getElementById('quote-form');

openModalBtn.addEventListener('click', function() {
    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden'; 
});

closeModalBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = ''; 
});

modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
});

quoteForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    alert('Richiesta di preventivo inviata con successo!');
    
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
    quoteForm.reset();
});