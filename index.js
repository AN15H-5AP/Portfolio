$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var offset = 80; // Account for fixed navbar height
            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 800, function(){
                window.location.hash = hash;
            });

            // Close mobile menu after clicking
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Typing effect for animated title
    var roles = ['Cyber Security Aspirants', 'IPTV Administrator', 'Network Security Expert'];
    var roleElement = document.querySelector('.animated-title');
    if (roleElement) {
        let index = 0;
        setInterval(() => {
            roleElement.innerHTML = roles[index];
            index = (index + 1) % roles.length;  // Loop through the roles array
        }, 4000); // Change role every 4 seconds
    }
    
    // Skill card hover effect (using jQuery for smooth hover transitions)
    $('.skill-card').hover(
        function() {
            // On mouse enter, highlight the card
            $(this).css('transform', 'scale(1.05)');
            $(this).css('box-shadow', '0 6px 12px rgba(0, 0, 0, 0.3)');
        }, 
        function() {
            // On mouse leave, return the card to normal
            $(this).css('transform', 'scale(1)');
            $(this).css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.2)');
        }
    );

    // Tooltip for skills (optional: using Bootstrap tooltips or custom tooltips)
    $('.skill-icon').attr('title', 'Click for more info'); // Add title as tooltip text
    
    // If using Bootstrap tooltips, you can initialize them like this:
    // $('[data-toggle="tooltip"]').tooltip();
    
    // Dynamic tooltip for skills (manual approach if Bootstrap is not used)
    $('.skill-card').hover(
        function() {
            var skillDescription = $(this).find('h3').text();
            var tooltip = $('<div class="tooltip">'+ skillDescription +'</div>').css({
                position: 'absolute',
                background: '#0b1023',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '12px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)'
            });
            $('body').append(tooltip);
            $(this).mousemove(function(event) {
                tooltip.css({
                    top: event.pageY + 10 + 'px',
                    left: event.pageX + 10 + 'px'
                });
            });
        }, 
        function() {
            $('.tooltip').remove(); // Remove tooltip on mouse leave
        }
    );
});
