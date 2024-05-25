import { Position } from "@/atomic/constants/spacing"
import { SetVoid } from "@/types/set"
import { StatusType } from "@/types/status"

export interface IndexProps {
    specialization: string
    status: StatusType
    onSelect: SetVoid
}

export type IndexStyledProps = {
    position: Position
} & Pick<IndexProps, 'status'>