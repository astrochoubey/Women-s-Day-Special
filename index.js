document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('name-form');
    const nameInput = document.getElementById('name-input');
    const landingPage = document.getElementById('landing-page');
    const homePage = document.getElementById('home-page');
    const greeting = document.getElementById('greeting');

    // Force the input to automatically convert to uppercase as the user types
    nameInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.toUpperCase();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        
        if (name) {
            // We use JS to ensure that the content is effectively treated as all uppercase
            const upperName = name.toUpperCase();
            
            // Set the home page greeting dynamically
            greeting.textContent = `HAPPY WOMEN'S DAY, ${upperName}!`;
            
            // Transition from landing page to home page
            landingPage.classList.remove('active');
            
            // Adding a tiny delay to allow DOM updates for a smoother transition feeling
            setTimeout(() => {
                homePage.classList.add('active');
            }, 50);
        }
    });
});
