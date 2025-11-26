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

// Check if buttons/links are available (with error handling)
(function() {
    var buttons = document.querySelectorAll('.wsup-button, .btn-tool');
    
    for (var i = 0; i < buttons.length; i++) {
        (function(button, http) {
            if (!button.href) return;
            
            // Set timeout for request
            http.timeout = 5000; // 5 seconds
            
            http.open('HEAD', button.href);
            
            http.onreadystatechange = function() {
                if (this.readyState === this.DONE) {
                    if (this.status === 200) {
                        button.style.display = 'inline-flex';
                    } else if (this.status !== 0) {
                        // Hide button only if we got a definitive error response
                        button.style.display = 'none';
                    }
                    // If status is 0 (CORS/network error), leave button visible
                }
            };
            
            http.onerror = function() {
                // On network error, leave button visible (better UX)
                button.style.display = 'inline-flex';
            };
            
            http.ontimeout = function() {
                // On timeout, leave button visible (better UX)
                button.style.display = 'inline-flex';
            };
            
            try {
                http.send();
            } catch (e) {
                // On exception, leave button visible
                button.style.display = 'inline-flex';
            }
        }(buttons[i], new XMLHttpRequest()));
    }
})();
