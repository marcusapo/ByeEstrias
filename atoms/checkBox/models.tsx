import { SetVoid } from "@/types/set"

export interface IndexProps {
    label: string
    description?: string
    onCheck: SetVoid
    isChecked: boolean
}

export type CheckBoxType = IndexProps