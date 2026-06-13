// VCard redirect functionality
(function() {
    var vcard = getParameterByName('vcard');
    if (vcard) {
        // Sanitize vcard parameter to prevent path traversal
        // Only allow alphanumeric characters, hyphens, and underscores
        var sanitizedVcard = vcard.replace(/[^a-zA-Z0-9_-]/g, '');
        if (sanitizedVcard && sanitizedVcard === vcard) {
            window.location.href = "/vcard/" + sanitizedVcard + ".vcf";
        }
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        // Properly escape regex special characters including backslash
        name = name.replace(/[[\]\\]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
})();

// Scroll-reveal: fade/slide elements into view as they enter the viewport
(function() {
    var revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    // index siblings within each grid so CSS can stagger them
    ['.services-grid', '.features-grid'].forEach(function(sel) {
        var grid = document.querySelector(sel);
        if (!grid) return;
        var items = grid.querySelectorAll('.reveal');
        for (var i = 0; i < items.length; i++) {
            items[i].style.setProperty('--i', i);
        }
    });

    // No IntersectionObserver (or reduced motion) -> show everything immediately
    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || reduceMotion) {
        revealEls.forEach(function(el) { el.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function(entries, obs) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    revealEls.forEach(function(el) { observer.observe(el); });
})();
