export interface ContainerNode {
  type: "container";
  split: "horizontal" | "vertical" | "tab";
  children: (ContainerNode | TerminalNode)[];
}

export interface TerminalNode {
  type: "cell";
  name: string;
}
