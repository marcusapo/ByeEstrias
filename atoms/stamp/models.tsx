import { ColorType } from "@/atomic/constants/colors";

export interface IndexProps {
    label: LabelType
    color: ColorType
}

type LabelType = {
    text: string
    color: string
}

export type StampType = IndexProps

export type MainStyledProps = {
    color: ColorType
}

export type BackgroundIconProps = {
    color: ColorType
}