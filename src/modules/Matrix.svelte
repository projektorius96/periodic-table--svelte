<script>
import {onMount} from 'svelte'
import Element from './Element.svelte'
import {getInterval} from './array_prototype'
import {default as rows, /* hereinafter (non-defaults): */ptable} from "./entries.js"; // console.log(rows); # [PASSED]

// $: console.log("rowRef: ", rowRef, "cellRef: ", rowRef?.firstElementChild)
console.log("ptable.elements: ", ptable.elements)
console.log("ptable.skipRanges: ", ptable.skipRanges)

let prevRow = 0; // prevent zero due to zero-based array
let id = 0;
let firstRow = new getInterval(ptable.skipRanges[0].from, 1, ptable.skipRanges[0].to, true, skippedValues([]))
let secondRow = new getInterval(ptable.skipRanges[1].from, 1, ptable.skipRanges[1].to, true, skippedValues([]))
let thirdRow = new getInterval(ptable.skipRanges[2].from, 1, ptable.skipRanges[2].to, true, skippedValues([]))

// Once Original Matrix loaded (mounted) by Svelte, do the modifications : 
onMount(()=>{
  console.log(document.getElementById('data-table').children)
  console.log("firstRow, secondRow, thirdRow: ", firstRow, secondRow, thirdRow)
})

</script>
<!-- Original Matrix -->
{#each rows as row}
<span class="element-row">
  <!-- {console.log(row)} -->
  {#each Object.values(row) as col}
  <span id={id += 1} class="element-col">
    <!-- {console.log(col)} -->
    No.{col.replace('element', `${prevRow += 1}`)}
    <!-- inner Svelte component with its styling -->
    <Element />
  </span>
  {/each}
</span>
{/each}

<style>
  @import './css/home.css'; /* it thinks as if you importing this being on index.html within /dist (/dist is served by devServer) */
  /* -- */
  .element-col {
        border: 1px solid black;
    }
</style>