<template>
<div>
    <h2> Hello World Services </h2>
    <p>This is a hello message service response: </p>
    <ul>
        <li>Message from {{ type }} at {{ domain }}</li>
        <li>Timestamp</li>
    </ul>
</div>
</template>

<script>
export default { name: 'HelloWorldServices', props: { type: String, domain: String } }
</script>
