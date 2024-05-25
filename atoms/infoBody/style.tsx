import styled from "styled-components";
import { IndexStyledProps } from "./models";

export const Main = styled.div<IndexStyledProps>`
    width: 100%;
    min-height: 50px;
    max-height: max-content;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #d7d7d7;
    ${({ type }) => {
        if (type === 'notice') {
            return `
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
            `
        }

        return `
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            `
    }}
    user-select: none;
    cursor: pointer;
`