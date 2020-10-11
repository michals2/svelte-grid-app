<script lang="ts">
  import ViewContainer from "./ViewContainer.svelte";
  import type { Container } from "./types";

  let root: Container = {
    type: "container",
    split: "horizontal",
    children: [
      {
        type: "container",
        split: "tab",
        children: [
          {
            type: "view",
            name: "FileA.ts",
          },
          {
            type: "view",
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
                type: "view",
                name: "FileC.ts",
              },
            ],
          },
          {
            type: "container",
            split: "tab",
            children: [
              {
                type: "view",
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
  <ViewContainer {root} />
</div>
