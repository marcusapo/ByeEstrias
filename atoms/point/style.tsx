import { white } from "@/atomic/constants/colors";
import styled, { keyframes } from "styled-components";
import { IndexStyledProps } from "./models";

const MAIN_SIZE = '18px'

const blink = keyframes`
    0%, 100% {
        filter: brightness(1)
    }
    50% {
        filter: brightness(2)
    }
`;

export const Main = styled.div<IndexStyledProps>`
    width: ${MAIN_SIZE};
    height: ${MAIN_SIZE};
    border-radius: ${MAIN_SIZE};
    border: 3px solid ${white};
    ${({ status }) => `background-color: ${status};`};

    position: absolute;
    cursor: pointer;

    top: ${({ position }) => position.top ?? '0px'};
    left: ${({ position }) => position.left ?? '0px'};
    right: ${({ position }) => position.right ?? '0px'};
    bottom: ${({ position }) => position.bottom ?? '0px'};

    box-shadow: 0px 0px 10px 2px ${({ status }) => status};

    animation: ${blink} 1s infinite;
`