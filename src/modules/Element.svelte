<script>
    // ...
    export let alias = "John";
    export let name = "Doe";
    export let weight = "101";
</script>

<div id="element" name="element">
    <p name="alias">{alias}</p>
    <p name="name">{name}</p>
    <p name="weight">{weight}</p>
</div>

<style>
    [name=element] {
        /* background-color: yellow; */
        text-align: center; /* single element text alignment */
        word-break: break-all;
    }
</style>