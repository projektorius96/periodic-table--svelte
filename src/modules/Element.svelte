<script>
    // ...
    export let alias = "John";
    export let name = "Doe";
    export let weight = "101";
</script>

<div id="element" name="element">
    <h3 name="alias">{alias}</h3>
    <p name="name">{name}</p>
    <p name="weight">{weight}</p>
</div>

<style>
    [name=element] {
        text-align: center; /* single element text alignment */
        word-break: break-all;
    }

    [name=name] {
        font-size: x-small;
    }

    [name=weight] {
        font-size: small;
    }
</style>