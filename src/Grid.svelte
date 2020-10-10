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
  {#if root.type === 'container'}
    {#each root.children as child}
      <svelte:self root={child} />
    {/each}
  {:else}
    <Cell />
  {/if}
</div>
