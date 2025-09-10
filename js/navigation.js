/**
 * Håndterer hamburgermenyfunksjonalitet for mobile enheter
 */

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    // Veksle meny når hamburgerknappen klikkes
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Håndter dropdown-meny på mobile
        const dropdownToggle = navLinks.querySelector('.dropdown-toggle');
        const dropdown = navLinks.querySelector('.dropdown');
        
        if (dropdownToggle && dropdown) {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }

        // Lukk meny når man åpner/trykker på en link (unntatt dropdown toggle)
        const links = navLinks.querySelectorAll('a:not(.dropdown-toggle)');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                // Lukk også dropdown hvis den er åpen
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            });
        });

        // Lukk meny når man klikker utenfor
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target) || hamburgerMenu.contains(event.target);
            
            if (!isClickInsideNav && navLinks.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                // Lukk også dropdown hvis den er åpen
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            }
        });
    }
});
