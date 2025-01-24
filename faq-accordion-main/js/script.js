const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const faq = this.closest('.faq');
        faq.classList.toggle('active');

        if (faq.classList.contains('active')) {
            this.src = './assets/images/icon-minus.svg';
        } else {
            this.src = './assets/images/icon-plus.svg';
        }
    })
})