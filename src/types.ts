export type Root = (ContainerNode | TerminalNode)[];

interface ContainerNode {
  type: "container";
  split: "horizontal" | "vertical" | "tab";
  children: Root;
}

interface TerminalNode {
  type: "cell";
  name: string;
}
