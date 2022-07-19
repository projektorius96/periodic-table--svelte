<script>
import {onMount} from 'svelte'
import Element from './Element.svelte'
import {getInterval} from './array_prototype'
import {default as rows, /* hereinafter (non-defaults): */ptable} from "./entries.js"; // console.log(rows); # [PASSED]
import { binding_callbacks } from 'svelte/internal';

// $: console.log("rowRef: ", rowRef, "cellRef: ", rowRef?.firstElementChild)
// console.log("ptable.elements: ", ptable.elements)
// console.log("ptable.skipRanges: ", ptable.skipRanges)

let prevRow = 0; // prevent zero due to zero-based array
let rowID = 0;
let colID = 0;

let {skipRange: firstRow} = new getInterval(ptable.skipRanges[0].from, 1, ptable.skipRanges[0].to, true, skippedValues([]))
let toSecondRedir = [];
let {skipRange: secondRow} = new getInterval(ptable.skipRanges[1].from, 1, ptable.skipRanges[1].to, true, skippedValues([]))
let {skipRange: thirdRow} = new getInterval(ptable.skipRanges[2].from, 1, ptable.skipRanges[2].to, true, skippedValues([]))
let totalRange = [...firstRow, ...secondRow, ...thirdRow]; console.log(totalRange);
// ...
let allHTMLElements = [];

// HELPER :
window.toSecondRedir = toSecondRedir
window.allHTMLElements = allHTMLElements

// Once Original Matrix loaded (mounted) by Svelte, do the modifications : 
onMount(()=>{
  totalRange.forEach((x, z)=>{
    // console.log("at:", x)
    document.getElementsByName('element').forEach((val, idx)=>{
      console.log("idx, val", idx, val)
      val.id = ++idx
      // console.log(val.id, typeof val.id /* == string */);
      // /* --- */
      // console.log("exploiting idx (totalRange[idx]): ", totalRange[--idx]);
      if (x == parseInt(val.id)) {
        // console.log("at least", true, "as matches", val);
        val.style.display = "none";
        val.parentElement.style.visibility = "hidden";
      }
    })
  })
  // console.log(rows)
  // console.log(Array.from(document.getElementById('data-table').children.namedItem('1').children))
  // console.log("firstRow, secondRow, thirdRow: ", firstRow, secondRow, thirdRow)
  /* Existing table (matrix) mods inside Svelte : */
  /* --- */ 
  /* [2;17] */
  /* --- */
      // firstRow.forEach((rangeValue, idx)=>{
      //   console.log("firstRow (index, rangeValue)", idx, rangeValue)
      //   let element = document.getElementById('data-table').children.namedItem('1').children[++idx]
      //   if ((parseInt(element.id) == rangeValue)) {
      //     element.style.display = "none"
      //     // toSecondRedir[idx] = parseInt(element.id)
      //   }
      //   else {element.style.display = "inline"}
      // })
  /* --- */
  // toSecondRedir.shift() // avoid <empty> i.e. sparsed item[s]
  // toSecondRedir.forEach((val, idx)=>console.log("after toSecondRedir redirection: ", idx, val))
})

</script>
<!-- Original Matrix -->
{#each rows as row}
<span id={rowID += 1} class="element-row">
  <!-- {console.log(row)} -->
  {#each Object.values(row) as col}
  <span id={colID += 1} class="element-col">
    <!-- {console.log(col)} -->
    {col.replace('element', `${prevRow += 1}`)}
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