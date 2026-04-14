// ── NAV scroll class ──────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile drawer ────────────────────────
function toggleMobile() {
    document.getElementById('mobileDrawer').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}

function closeMobile() {
    document.getElementById('mobileDrawer').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

// Close drawer on outside click
document.addEventListener('click', (e) => {
    const drawer = document.getElementById('mobileDrawer');
    const ham = document.getElementById('hamburger');
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !ham.contains(e.target)) {
        closeMobile();
    }
});

// ── Reveal on scroll ─────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));