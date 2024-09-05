// Smooth scrolling for the navigation links
$(document).ready(function(){
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    
    // Typing effect for "Cybersecurity Engineer" on home page
    var roles = ['Cybersecurity Engineer', 'Penetration Tester', 'Security Analyst'];
    var roleElement = document.getElementById('role');
    
    let index = 0;
    setInterval(() => {
        roleElement.innerHTML = roles[index];
        index = (index + 1) % roles.length;  // Loop through the roles array
    }, 4000); // Change role every 4 seconds
});

// Smooth scroll for the navbar links
$(document).ready(function() {
    $('.nav-link').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
