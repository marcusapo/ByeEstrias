import { LoginTypes } from "@/services/redux/reducers/login/models";
import { ReactNode } from "react";

export interface IndexProps {
    dataUser: LoginTypes['data']
    title: string
    children: ReactNode | ReactNode[]
    header?: HeaderOptions
    noPadding?: noPaddingType;
}

export interface IndexStyledProps {
    noPadding?: noPaddingType;
}

export type noPaddingType = 'default' | 'none'

export type HeaderOptions = 'contain' | 'none'