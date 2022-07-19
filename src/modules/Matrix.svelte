<script>
import {onMount} from 'svelte'
import Element from './Element.svelte'
import {getInterval} from './array_prototype'
import {default as rows, /* hereinafter (non-defaults): */ptable} from "./entries.js"; // console.log(rows); # [PASSED]

// $: console.log("rowRef: ", rowRef, "cellRef: ", rowRef?.firstElementChild)
console.log("ptable.elements: ", ptable.elements)
console.log("ptable.skipRanges: ", ptable.skipRanges)

let prevRow = 0; // prevent zero due to zero-based array
let rowID = 0;
let colID = 0;
let {skipRange: firstRow} = new getInterval(ptable.skipRanges[0].from, 1, ptable.skipRanges[0].to, true, skippedValues([]))
let {skipRange: secondRow} = new getInterval(ptable.skipRanges[1].from, 1, ptable.skipRanges[1].to, true, skippedValues([]))
let {skipRange: thirdRow} = new getInterval(ptable.skipRanges[2].from, 1, ptable.skipRanges[2].to, true, skippedValues([]))

// Once Original Matrix loaded (mounted) by Svelte, do the modifications : 
onMount(()=>{
  console.log(rows)
  console.log(Array.from(document.getElementById('data-table').children.namedItem('1').children))
  console.log("firstRow, secondRow, thirdRow: ", firstRow, secondRow, thirdRow)
  /* Existine table (matrix) mods inside Svelte : */
  // THE APPROACH DID NOT WORK [WILL REMOW WITHIN COUPLE OF COMMITS] :
  // Array.from(document.getElementById('data-table').children.namedItem('1').children).forEach((val, idx)=>{
  //   console.log("firstRow[idx]: ", firstRow[idx])
  //   console.log("index (idx): ", idx, "value (val): ", val, "value.id (val.id):", val.id)
  //   firstRow[idx] == val.id ? val.style.display = "none" : val.style.display = "inline-block"  
  // })
  firstRow.forEach((rangeValue, idx)=>{
    let element = document.getElementById('data-table').children.namedItem('1').children[++idx]
    // console.log("range value (val): ", val)
    // console.log("range index (idx)-to-span#idx", document.getElementById('data-table').children.namedItem('1').children[++idx])
    // idiomatic "if" :
    parseInt(element.id) == rangeValue ? element.style.display = "none" : element.style.display = "inline" ; // NOTE : later will fix with flex
  })
})

</script>
<!-- Original Matrix -->
{#each rows as row}
<span id={rowID += 1} class="element-row">
  <!-- {console.log(row)} -->
  {#each Object.values(row) as col}
  <span id={colID += 1} class="element-col">
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