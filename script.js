document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const checkbox = document.getElementById('theme-toggle-checkbox');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.remove('light-mode');
    checkbox.checked = true;
} else {
    document.body.classList.add('light-mode');
    checkbox.checked = false; 
}

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
});
