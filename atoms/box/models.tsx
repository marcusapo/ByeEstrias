import { ChildrenType } from "@/types/variables"
import { IconsType } from "../icon/models";

export interface IndexProps {
    flex?: number
    height?: string;
    width?: string;
    icon?: IconsType
    title?: string
    children?: ChildrenType
    color?: ColorType
    className?: string;
}

export type IndexStyledProps = {
    flex: number;
    height?: string;
    width?: string;
    color: ColorType
}

type ColorType = 'white' | 'secundary'