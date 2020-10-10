<script lang="ts">
  import * as Types from "./types";
  import Cell from "./Cell.svelte";
  export let root: Types.ContainerNode;

  $: console.log(root);
</script>

<style>
  .container {
    display: flex;
    border: 1px dashed white;
    padding: 4px;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
    height: 100%;
  }

  .horizontal {
    flex-direction: row;
  }

  .vertical {
    flex-direction: column;
  }
</style>

{#if root.type === 'container'}
  <div
    class="container"
    class:horizontal={root.split === 'horizontal'}
    class:vertical={root.split === 'vertical'}
    class:tab={root.split === 'tab'}>
    {#each root.children as child}
      <svelte:self root={child} />
    {/each}
  </div>
{:else}
  <Cell {...root} />
{/if}
