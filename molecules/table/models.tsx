import { TextWeight } from "@/atomic/constants/text";
import { AlignItems } from "@/atomic/constants/align";
import { SetString, SetVoid } from "@/types/set";

export interface IndexProps {
    type?: TypeTable
    columns: ColumnTableType[]
    data: LineTableType[]
    selectedItem: string;
    onDoubleClick: SetString
    onClick?: SetString
    hasBorder?: boolean
}

type TypeTable = 'small' | 'big'

export type ColumnTableType = {
    label: string;
    size: number;
    align: AlignItems
    weight: TextWeight
    color?: string
    status?: StatusType
    isRanked?: boolean
    onClick?: SetVoid
}

export type StatusType = 'primary' | 'green' | 'red' | 'orange'

export type LineTableType = {
    id: string;
    data: ColumnTableType[]
}

export type LineStyledProps = {
    selected: boolean
    type: TypeTable
    hasBorder: boolean
}

export type StatusStyledProps = {
    status: StatusType
}

export type RankedStyledProps = {
    position: number
}