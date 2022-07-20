<script>
    // ...
    export let alias;
    export let name;
    export let weight;
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