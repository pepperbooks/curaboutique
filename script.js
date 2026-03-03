// Cart counter mock (just visual)
document.querySelectorAll('.btn-add').forEach(btn => {
  btn.addEventListener('click', () => {
    const countEl = document.querySelector('.cart-count');
    let count = parseInt(countEl.textContent) || 0;
    countEl.textContent = count + 1;
    
    btn.textContent = "Added ✓";
    setTimeout(() => btn.textContent = "Add to Cart", 1800);
  });
});

// Simple smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});