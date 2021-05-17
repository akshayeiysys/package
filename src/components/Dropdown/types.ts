export type Position = "top" | "top-right" | "bottom";
export type Top = "50px";
export type Height= "500px";

export interface PositionProps {
  position?: Position;
  top?: Top;
  height? : Height;
}

export interface DropdownProps extends PositionProps {
  target: React.ReactElement;
}
