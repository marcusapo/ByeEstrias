import { SetVoid } from "@/types/set";
import { ChildrenType } from "@/types/variables";

export interface IndexProps {
    isCenter?: boolean
    isSelected?: boolean
    onClick: SetVoid;
    children: ChildrenType
}

export type IndexStyledProps = {
    isCenter?: boolean
    isSelected?: boolean
}