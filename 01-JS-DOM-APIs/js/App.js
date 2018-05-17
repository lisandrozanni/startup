function see() {
    alert("Hello!!");
}

function addSection() {
    var requestURL = 'http://api.icndb.com/jokes/random';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var objJS = request.response;
        addInfo(objJS);
    }
    
    function addInfo(objJS) {
        var currentSection = document.getElementById('info');

        var p1 = document.createElement('p');
        p1.textContent = objJS.type;
        currentSection.appendChild(p1);

        var p2 = document.createElement('p');
        p2.textContent = objJS.value.id;
        currentSection.appendChild(p2);

        var p3 = document.createElement('p');
        p3.textContent = objJS.value.joke;
        currentSection.appendChild(p3);
    }
}
