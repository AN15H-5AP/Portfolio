
$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Smooth scrolling for navigation links - FIXED
    $('a.nav-link[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var target = $(targetId);

        if (target.length) {
            var offset = 100; // Increased offset for fixed navbar

            $('html, body').animate({
                scrollTop: target.offset().top - offset
            }, 800, function(){
                // Update URL hash after animation
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
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
            index = (index + 1) % roles.length;
        }, 4000);
    }
    
    // Skill card hover effect
    $('.skill-card').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
            $(this).css('box-shadow', '0 6px 12px rgba(0, 0, 0, 0.3)');
        }, 
        function() {
            $(this).css('transform', 'scale(1)');
            $(this).css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.2)');
        }
    );

    // Dynamic tooltip for skills
    $('.skill-card').hover(
        function() {
            var skillDescription = $(this).find('h3').text();
            var tooltip = $('<div class="custom-tooltip">'+ skillDescription +'</div>').css({
                position: 'absolute',
                background: '#0b1023',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '12px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                zIndex: 9999
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
            $('.custom-tooltip').remove();
        }
    );

    // Active navigation highlighting
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop() + 120;
        
        $('.nav-link[href^="#"]').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            
            if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });
});
