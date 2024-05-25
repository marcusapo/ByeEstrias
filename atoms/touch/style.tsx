import styled from "styled-components";
import { IndexStyledProps } from "./models";
import { grey } from "@/atomic/constants/colors";

export const Main = styled.div<IndexStyledProps>`
    ${({ isCenter }) => {
        if (isCenter) {
            return `
                justify-content: center;
                align-items: center;
                height: max-content;
                padding: 5px;
                border-radius: 7px;
            `
        }
    }}

    ${({ isSelected }) => isSelected && `background: ${grey}`};
    cursor: pointer;
`