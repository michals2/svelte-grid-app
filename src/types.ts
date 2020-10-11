export interface Container {
  type: "container";
  split: "horizontal" | "vertical" | "tab";
  children: (Container | View)[];
}

export interface View {
  type: "view";
  name: string;
}
