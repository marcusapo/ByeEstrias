import { InputSizeType } from "@/atomic/constants/input"

export interface IndexProps {
    label?: string
    showLabel?: boolean
    size: InputSizeType
    options: OptionsType[]
    onChange: SetOptionsType
    selected?: number
    defaultOption?: boolean | string
}

export type IndexStyledProps = {
    size: InputSizeType
}

export type OptionsType = {
    label: string;
    value: string;
}

export type SetOptionsType = ({label, value}: { label: string, value: string }) => void