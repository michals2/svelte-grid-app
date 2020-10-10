<script lang="ts">
  import Grid from "./Grid.svelte";
  import * as Types from "./types";

  let root: Types.ContainerNode = {
    type: "container",
    split: "horizontal",
    children: [
      {
        type: "container",
        split: "tab",
        children: [
          {
            type: "cell",
            name: "FileA.ts",
          },
          {
            type: "cell",
            name: "FileB.ts",
          },
        ],
      },
      {
        type: "container",
        split: "vertical",
        children: [
          {
            type: "container",
            split: "tab",
            children: [
              {
                type: "cell",
                name: "FileC.ts",
              },
            ],
          },
          {
            type: "container",
            split: "tab",
            children: [
              {
                type: "cell",
                name: "FileD.ts",
              },
            ],
          },
        ],
      },
    ],
  };
</script>

<style>
  .app {
    height: 600px;
    width: 600px;
  }
</style>

<div class="app">
  <Grid {root} />
</div>
