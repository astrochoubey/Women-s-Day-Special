document.addEventListener('DOMContentLoaded', () => {
    
    // Determine which page we are on by checking for unique IDs
    const form = document.getElementById('name-form');
    const folder = document.getElementById('folder');
    const noteGreeting = document.getElementById('note-greeting');

    // 1. Landing Page Logic
    if (form) {
        const nameInput = document.getElementById('name-input');
        
        // Force uppercase
        nameInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase();
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = nameInput.value.trim();
            if (name) {
                // Extract just the first name and store it in sessionStorage
                const firstName = name.split(/\s+/)[0];
                sessionStorage.setItem('womenDayName', firstName);
                
                // Navigate to the folder page
                window.location.href = 'folder.html';
            }
        });
    }

    // 2. Folder Page Logic
    if (folder) {
        folder.addEventListener('click', () => {
            const folderFront = folder.querySelector('.folder-front');
            
            // Add a flip down animation to the front flap
            folderFront.style.transform = 'rotateX(-90deg)';
            folderFront.style.opacity = '0';
            
            // Navigate to the note page after the animation starts completing
            setTimeout(() => {
                window.location.href = 'note.html';
            }, 550);
        });
    }

    // 3. Note Page Logic
    if (noteGreeting) {
        const noteImage = document.getElementById('note-image');
        const noteMessage = document.getElementById('note-message');
        
        // Retrieve the stored name, or use an empty string if not found
        const firstName = sessionStorage.getItem('womenDayName') || '';
        
        if (firstName) {
            const upperName = firstName.toUpperCase();
            const lowerName = firstName.toLowerCase();
            
            // Conditionally set the image, greeting, and message based on the name
            if (lowerName === 'anuradha') {
                noteGreeting.textContent = "Dear MOM,";
                noteImage.src = "Archive./A..png";
                noteImage.style.display = "block";
                noteMessage.textContent = "Thank you for teaching me what it is to be brave and strong-willed. I would be lucky if I ever became half the amazing woman you are. Happy Women's Day!!";
            } else if (lowerName === 'mitthi' || lowerName === 'akshita' || lowerName === 'shweta') {
                noteGreeting.textContent = `Dear ${upperName},`;
                noteImage.src = "Archive./B..png";
                noteImage.style.display = "block";
                noteMessage.textContent = "I'm so incredibly happy and proud to have you as my sister. Thank you for always being there. Happy Women's Day!";
            } else {
                noteGreeting.textContent = `Dear ${upperName},`;
                noteImage.src = "Archive./C..png";
                noteImage.style.display = "block";
                noteMessage.textContent = "Thank you for being such a good role model for me. Your strength inspires me every day. Happy Women's Day!";
            }
        } else {
            // Default generic fallback if they bypassed the form page somehow
            noteGreeting.textContent = "Dear friend,";
            noteImage.src = "Archive./C..png";
            noteImage.style.display = "block";
            noteMessage.textContent = "Happy Women's Day! Your strength inspires me every day.";
        }

        // Start petal animation since we are on the note page
        startPetalAnimation();
    }

    function startPetalAnimation() {
        const petalsContainer = document.getElementById('petals-container');
        if (!petalsContainer) return; // safety check
        
        let petalCount = 0;
        const maxPetals = 40; // Total petals
        
        const createPetal = () => {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            
            const startPosX = Math.random() * window.innerWidth;
            const size = Math.random() * 15 + 10;
            const duration = Math.random() * 3 + 3;
            
            petal.style.left = `${startPosX}px`;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.animationDuration = `${duration}s`;
            
            const drift = Math.random() * 100 - 50;
            petal.style.transform = `translateX(${drift}px)`;
            
            petalsContainer.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, duration * 1000);
        };
        
        const petalInterval = setInterval(() => {
            createPetal();
            petalCount++;
            
            if (petalCount >= maxPetals) {
                clearInterval(petalInterval);
            }
        }, 150);
    }
});
