// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');

// Load saved theme
if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌞';
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const mode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    themeToggle.textContent = mode === 'light' ? '🌞' : '🌙';
});
