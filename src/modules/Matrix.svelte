<script>
import {default as rows, /* hereinafter (non-defaults): */ptable} from "./entries.js"; // console.log(rows); # [PASSED]

// $: console.log("rowRef: ", rowRef, "cellRef: ", rowRef?.firstElementChild)

// DEBUGGING HELPERS :
// window.rows = rows
// window.template = ptable.template

// GOAL : re-write the following 2D block in Svelte way using each block , for more refer to : @https://stackoverflow.com/questions/56520104/svelte-each-function-in-nested-json

let prevRow = 0; // prevent zero due to zero-based array
</script>

{#each rows as row}
<tr>
  <!-- {console.log(row)} -->
  {#each Object.values(row) as col}
  <td>
    <!-- {console.log(col)} -->
    {col.replace('element', `${prevRow += 1}`)}
  </td>
  {/each}
</tr>
{/each}

