import { SetVoid } from "@/types/set";
import { Margins } from "@/atomic/constants/spacing";
import { IconsType } from "../icon/models";
import { Rotate } from "@/atomic/constants/align";

export interface IndexProps extends Margins {
    icon?: IconsType;
    text: string
    type: TypeButton
    onClick: SetVoid;
    arrowDirection?: Rotate
    disabled?: boolean
    displayNone?: boolean
    center?: boolean
    id?: string
    className?: string;
}

export type ButtonType = Omit<IndexProps, 'arrowDirection' | 'displayNone' | 'center'>

type TypeButton = 'primaryBig'
                | 'primaryFull'
                | 'primarySmall'
                | 'primaryIcon'
                | 'redBig'
                | 'redFull'
                | 'redSmall'
                | 'secundarySmall'
                | 'secundaryBig'
                | 'secundaryFull'
                | 'blueLightSmall'
                | 'blueLightBig'
                | 'blueLightFull'
                | 'orangeBig'
                
export type IndexStyledProps = {
    disabled?: boolean
    displayNone?: boolean
    center?: boolean
} & Margins