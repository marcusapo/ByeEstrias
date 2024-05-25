import { Rotate } from "@/atomic/constants/align";
import { ColorType } from "../../constants/colors";
import { Margins } from "../../constants/spacing";
import { SetVoid } from "@/types/set";

export interface IndexProps extends Margins {
    name: IconsName;
    size: number;
    fill: ColorType;
    stroke: ColorType;
    rotate?: Rotate;
    onClick?: SetVoid;
    className?: string;
}

export type IconsName = 'arrow'
                        | 'arrow2'
                        | 'correct'
                        | 'edit'
                        | 'paper'
                        | 'print'
                        | 'buy'
                        | 'stock'
                        | 'sale'
                        | 'finance'
                        | 'customer'
                        | 'integrations'
                        | 'dashboard'
                        | 'question'
                        | 'notification'
                        | 'user'
                        | 'user2'
                        | 'cashFlow'
                        | 'trophy'
                        | 'clock'
                        | 'promotion'
                        | 'best'
                        | 'door'
                        | 'options'
                        | 'store'
                        | 'shield'
                        | 'config'
                        | 'add'
                        | 'historic'
                        | 'clip'
                        | 'send'
export type IconsType = {
    name: IconsName;
    size: number;
    fill: ColorType;
    stroke: ColorType;
}

export type IndexStyledProps = {
    size: number;
    rotate?: Rotate;
} & Margins