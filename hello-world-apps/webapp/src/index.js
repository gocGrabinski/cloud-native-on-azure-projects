var java_el = document.getElementById("java_hello");
fetchGreetingData(java_el);


function fetchGreetingData(element) {
    fetch('/test.json')
        .then(function (response) {
            return response.json();
        }).then(function (myJson) {
            console.log(myJson.Greeting);
            element.getElementsByTagName("P")[0].textContent = myJson.Greeting;
        });
}