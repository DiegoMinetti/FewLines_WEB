// VCard redirect functionality
(function() {
    var vcard = getParameterByName('vcard');
    if (vcard) {
        window.location.href = "/vcard/" + vcard + ".vcf";
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
})();

// Check if buttons/links are available
(function() {
    var buttons = document.querySelectorAll('.wsup-button, .btn-tool');
    
    for (var i = 0; i < buttons.length; i++) {
        (function(button, http) {
            if (!button.href) return;
            
            http.open('HEAD', button.href);
            http.onreadystatechange = function() {
                if (this.status != 200 && this.readyState === this.DONE) {
                    button.style.display = 'none';
                } else if (this.status == 200) {
                    button.style.display = 'inline-flex';
                }
            };
            http.send();
        }(buttons[i], new XMLHttpRequest()));
    }
})();
