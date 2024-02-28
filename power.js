
    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.getElementById('menu-btn');
        const navbar = document.getElementById('navbar');

        if (menuBtn && navbar) {
            menuBtn.addEventListener('click', function() {
                navbar.classList.toggle('hidden');
            });
        }
    });


    // JavaScript to handle click events and toggle active class
    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); 
                navLinks.forEach(otherLink => otherLink.classList.remove('active')); 
                this.classList.add('active'); 
            });
        });
    });




document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Do something with the form data, such as sending it to a server
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // You can also display a success message or perform other actions here
    });
});

