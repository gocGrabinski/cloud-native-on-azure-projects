var hello_divs = document.getElementsByClassName("hello");
console.log(hello_divs);
Array.prototype.forEach.call(hello_divs, (element) => {
    fetchGreetingData(element);
});


function fetchGreetingData(element) {
    var type = element.getAttribute("id").replace("_hello", "");
    console.log(`/${type}`);
    fetch(`/${type}`)
        .then(function (response) {
            return response.json();
        }).then(function (myJson) {
            console.log(myJson.Greeting);
            element.getElementsByTagName("P")[0].textContent = myJson.Greeting;
        });
}