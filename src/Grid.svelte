<script lang="ts">
  import * as Types from "./types";
  import Cell from "./Cell.svelte";
  export let root: Types.Root;

  $: console.log(root);
</script>

<style>
  div {
    display: flex;
    border: 1px dashed white;
  }
</style>

<div class="container">
  {#each root as child}
    {#if child.type === 'container'}
      <svelte:self root={child.children} />
    {:else}
      <Cell {...child} />
    {/if}
  {/each}
</div>
