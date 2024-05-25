import { IconsType } from "@/atomic/atoms/icon/models"
import { SetVoid } from "@/types/set"
import { ChildrenType } from "@/types/variables"

export interface IndexProps {
    title: string
    description?: string
    icon?: IconsType & { position: 'top' | 'left' }
    isVisible: boolean
    children: ChildrenType
    onClose: SetVoid
}