<script>
    // ...
    export let alias = "John";
    export let name = "Doe";
    export let weight = "101";
</script>

<div id="element" name="element">
    <p>{alias}</p>
    <p>{name}</p>
    <p>{weight}</p>
</div>

<style>
    [name=element] {
        background-color: yellow;
        text-align: center; /* single element text alignment */
    }
</style>