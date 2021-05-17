/// <reference types="react" />
export declare type Position = "top" | "top-right" | "bottom";
export declare type Top = "50px";
export declare type Height = "500px";
export interface PositionProps {
    position?: Position;
    top?: Top;
    height?: Height;
}
export interface DropdownProps extends PositionProps {
    target: React.ReactElement;
}
