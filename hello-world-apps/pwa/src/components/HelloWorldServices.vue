<template>
<div>
    <h2> Hello World Services </h2>
    <p>This is a hello message service response: </p>
    <ul>
        <li>Message from {{ type }} at {{ domain }}</li>
        <li>Timestamp</li>
        <li>Greeting - {{ Greeting }}</li>
    </ul>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'HelloWorldServices',
    props: { type: String, domain: String },
    data: function () {
        fetch('/test.json')
            .then(function (response) {
                return response.json();
            }    
    }
    // mounted: function () {
    //     fetch('/test.json')
    //         .then(function (response) {
    //             var jsondata = response.json();
    //             console.log(jsondata);
    //             this.data = (jsondata) => {
    //                 return jsondata;
    //             }
    //         })
    // }
}
</script>
