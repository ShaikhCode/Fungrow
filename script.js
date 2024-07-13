document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});

function loadPage(page) {
    const content = document.getElementById('content');
    if (page === 'home') {
        content.innerHTML = `
            <section class="hero">
                <h1>Welcome to Funngro</h1>
                <p>Empowering Teens to Earn and Learn</p>
            </section>
            <section class="about">
                <h2>About Us</h2>
                <p>Funngro is a platform designed to help teenagers gain real-world experience and earn while they learn. Our mission is to create opportunities for teens to grow and succeed.</p>
            </section>
        `;
    } else if (page === 'company') {
        content.innerHTML = `
            <section class="company">
                <h1>For Companies</h1>
                <p>Connect with talented teens eager to contribute and grow. Join Funngro and find the right match for your projects.</p>
            </section>
            <section class="teen">
                <h1>For Teens</h1>
                <p>Looking to gain experience and earn? Funngro is the perfect place for you. Join now and start your journey.</p>
            </section>
        `;
    }
}
