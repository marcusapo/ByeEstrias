export type FlexDirection = 'row' | 'column' | 'column-reverse'
export type JustifyContent = 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center'
export type AlignItems = 'flex-start' | 'flex-end' | 'center'
export type FlexWrap = 'unset' | 'wrap' | 'wrap-reverse'
export enum Rotate {
    top = '270deg',
    right = '-90deg',
    bottom = '90deg',
    left = '180deg',
}
export type Position = 'relative' | 'absolute'

export type Alignments = {
    flexdirection?: FlexDirection;
    justifycontent?: JustifyContent;
    alignitems?: AlignItems;
    gap?: string;
    flexWrap?: FlexWrap;
    position?: Position;
    zIndex?: number;
}

export type AlignmentsStyledProps = Alignments