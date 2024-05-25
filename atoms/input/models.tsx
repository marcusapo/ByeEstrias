import { FocusEventHandler, HTMLInputTypeAttribute } from "react";
import { Margins } from "@/atomic/constants/spacing";
import { TextAlign } from "@/atomic/constants/text";
import { SetBoolean, SetVoid } from "@/types/set";
import { InputSizeType } from "@/atomic/constants/input";
import { OptionsType } from "../comboBox/models";
import { IconsType } from "../icon/models";
import { ButtonType } from "../button/models";

export interface IndexProps extends Margins {
    value: string;
    onChangeText: (e: string) => void
    changeComplete?: boolean;
    label?: string;
    placeholder?: string;
    textAlign?: TextAlign;
    type?: HTMLInputTypeAttribute;
    mode?: InputMode
    icon?: IconsType
    actionButton?: SetVoid
    autoFocus?: boolean;
    onFocus?: (FocusEventHandler<HTMLInputElement> & SetBoolean)
    onBlur?: SetVoid;
    onEnter?: SetVoid
    max?: number;
    step?: number
    min?: number;
    id?: string
    size: InputSizeType
    color?:InputColorType
    options?: OptionsType[]
    list?: string
    disabled?: boolean
    inputmode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    pattern?: string
    maxLength?: number
    displayNone?: boolean
}

type InputColorType = 'primary'
                        | 'secundary'
                        | 'orange'
                        | 'greenLight'
                        | 'greyLight'
                        | 'blueLight'
                        | 'red'
                        | 'yellow'
                        | 'underline'

type InputMode = 'default' | 'underline'

export type IndexStyledProps = {
    width?: string;
    textAlign?: TextAlign;
    size?: InputSizeType;
    color?:InputColorType
    mode: InputMode
} & Margins