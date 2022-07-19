<script>
import {onMount, afterUpdate} from 'svelte'
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
let {skipRange: secondRow} = new getInterval(ptable.skipRanges[1].from, 1, ptable.skipRanges[1].to, true, skippedValues([]))
let {skipRange: thirdRow} = new getInterval(ptable.skipRanges[2].from, 1, ptable.skipRanges[2].to, true, skippedValues([]))
let totalRange = [...firstRow, ...secondRow, ...thirdRow]; console.log(totalRange);
// ...
let allHTMLElements = [];
let allreHTMLElements = [];

// HELPER :
window.allHTMLElements = allHTMLElements

afterUpdate(()=>{
  console.log("afterUpdate", allHTMLElements)
  /*   
  (Array.from(document.getElementsByClassName('element-col'))).forEach((val, index)=>{
    if (val.style.visibility === "hidden") console.log(val)
  }) 
  */
  firstRow.forEach((x, z)=>{
    allHTMLElements.splice(x, 1)
    document.getElementsByName('element').forEach((val, idx)=>{

      if ((x == totalRange[0]) && (val.computedStyleMap().get('visibility').value === "hidden")) {
        console.log("HIDDEN", val);
      } 
      else {
        if ((x == totalRange[0]) && (val.computedStyleMap().get('visibility').value === "visible")) {
        console.log("VISIBLE", val);
        }
      }

    })
  })
  // document.getElementsByName("element").forEach((val, idx)=>{
  //   // allHTMLElements.push(val)
  //   console.log("idx, allHTMLElements[idx] (afterUpdate)", idx, allHTMLElements[idx])
  //   // console.log("parent: ", val.parentElement/* .id */, "at (index): ", idx)
  //   // console.log(val.computedStyleMap().get('display').value)
  //   // console.log(val.computedStyleMap().get('display').value === "block");
  //   /* --- */
  //   // if (val.computedStyleMap().get('display').value === "block") {
  //   //   console.log("match", val.parentElement.firstElementChild.textContent, ++idx)
  //   //   val.parentElement.firstElementChild.textContent = idx
  //   // }
  //   // else {
  //   //   val.parentElement.firstElementChild.textContent = 0;
  //   // }
  // })
})

// Once Original Matrix loaded (mounted) by Svelte, do the modifications : 
onMount(()=>{
  console.log("onMount")
  totalRange.forEach((x, z)=>{
    console.log("at:", x)
    document.getElementsByName('element').forEach((val, idx)=>{
      if (x == totalRange[0]) allHTMLElements.push(val) // just one cycle not xTimes of totalRange.length
      val.id = ++idx
      // console.log("inside: ", allHTMLElements[idx])
      // console.log(val.id, typeof val.id /* == string */);
      if (x == parseInt(val.id)) {
        // console.log("at least", true, "as matches", idx);
        /* if (x == totalRange[0]) console.log("if clause", allHTMLElements); */
        val.style.display = "none";
        val.parentElement.style.visibility = "hidden";
        // allHTMLElements.splice(x, 1)
      } 
      else {
       //  val.parentElement.setAttribute()
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
    <p name="no">{col.replace('element', `${prevRow += 1}`)}</p>
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