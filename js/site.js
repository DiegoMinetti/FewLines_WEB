var vcard = getParameterByName('vcard');
if (vcard) {
    window.location.href="/vcard/" + vcard + ".vcf";
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

var buttons = document.querySelectorAll('.button');

for (var i = 0; i < buttons.length; i++) {
    (function(button, http) {
        console.log("href: " + button.href);
        http.open('HEAD', button.href);
        http.onreadystatechange = function() {
            console.log("readyState: " + this.readyState);
            console.log("status: " + this.status);
            if (this.readyState != this.DONE || this.status != 200) {
                button.style.display = 'none';
            }
        };
        http.send();
    }(buttons[i], new XMLHttpRequest()))
}