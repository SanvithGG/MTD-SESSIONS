// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,.6)' : 'none';
});

// Form submission feedback
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✅ Request Sent!';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Request Test Drive';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .review, .feature-list li, .stat').forEach(el => {
  el.style.cssText += 'opacity:0; transform:translateY(24px); transition: opacity .5s ease, transform .5s ease;';
  observer.observe(el);
});
