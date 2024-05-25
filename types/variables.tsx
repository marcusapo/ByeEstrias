import { ParsedUrlQueryInput } from "querystring";
import { ReactNode } from "react";

export type ChildrenType = ReactNode | ReactNode[] | undefined
export type PageType = '/'
                        | '/home'
                        | '/pacient'
                        | '/chat'
                        | '/analysis'
                        | '/question'
                        | '/register'
                        undefined
export type RouteParamsType = string | null | ParsedUrlQueryInput | undefined 