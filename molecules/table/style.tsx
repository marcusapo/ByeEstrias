import styled from "styled-components";
import { green, black, orange, primary, red, white, blueLight, grey } from "@/atomic/constants/colors";
import { LineStyledProps, RankedStyledProps, StatusStyledProps } from "./models";

export const Main = styled.section`
    width: 100%;

    @media only screen and (max-width: 800px) {
        & {
            width: 100%;
            padding-right: 20px;
            overflow: scroll;
        }
    }
`

export const Line = styled.div<LineStyledProps>`
    width: 100%;
    height: ${({ type }) => type === 'big' ? '45px' : '30px'};
    background-color: ${({ selected }) => selected  ? `${blueLight}` : `${white}`};
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: .2s;
    padding-left: 15px;
    ${({ hasBorder}) => hasBorder && `border-top: 1px solid ${black};`};

    &:hover {
        background-color: ${blueLight};
    }

    @media only screen and (max-width: 800px) {
        & {
            width: 1000px;
            height: max-content;
            gap: 20px;
            padding: 20px 10px;
        }

        & div {
            align-items: center;
        }
    }
`

const SIZE_STATUS = '10px'

export const Status = styled.div<StatusStyledProps>`
    width: ${SIZE_STATUS};
    height: ${SIZE_STATUS};
    margin-left: 5px;
    margin-top: 2px;
    border-radius: 100% !important;
    ${({ status }) => status === 'primary' && `background-color: ${primary};`}
    ${({ status }) => status === 'green' && `background-color: ${green};`}
    ${({ status }) => status === 'red' && `background-color: ${red};`}
    ${({ status }) => status === 'orange' && `background-color: ${orange};`}
`

export const Ranked = styled.div<RankedStyledProps>`
    width: 35px;
    height: 35px;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    ${({ position }) => {
        switch (position) {
            case 0:
                return `background: ${primary}`;
            case 1:
                return `background: ${grey}`;
            case 2:
                return `background: ${orange}`;
        }

        return `
            background: ${white};
            border: 1px solid ${black};
        `;
    }}
`