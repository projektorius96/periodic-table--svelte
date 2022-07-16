<script>
import {default as rows, /* hereinafter (non-defaults): */ptable} from "./entries.js"; // console.log(rows); # [PASSED]
import Element from './Element.svelte'

// $: console.log("rowRef: ", rowRef, "cellRef: ", rowRef?.firstElementChild)

// DEBUGGING HELPERS :
// window.rows = rows
// window.template = ptable.template

let prevRow = 0; // prevent zero due to zero-based array
</script>

{#each rows as row}
<span class="element-row">
  <!-- {console.log(row)} -->
  {#each Object.values(row) as col}
  <span class="element-col">
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