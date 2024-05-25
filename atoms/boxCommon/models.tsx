import { SetVoid } from "../../../types/set";
import { Alignments } from "../../constants/align";
import { Margins, Padding, Position } from "../../constants/spacing";

export interface IndexProps extends Margins, Padding, Position, Alignments {
    width?: string;
    height?: string;

    flex?: string | number;
    bgColor?: string | undefined;
    scroll?: 'hidden' | 'scroll' | 'auto' | 'visible' | 'initial';
    radius?: string;
    border?: string;
    children: React.ReactNode | React.ReactNode[] | undefined;

    display?: 'flex' | 'none';

    onClick?: SetVoid;
}