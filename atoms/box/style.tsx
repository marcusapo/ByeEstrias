import styled from "styled-components";
import { black, blue, primary, white } from "@/atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.div<IndexStyledProps>`
    flex: ${({ flex }) => flex ?? 1 };
    height: ${({ height }) => height ?? 'max-content' };
    width: ${({ width }) => width ?? 'max-content' };
    background-color: ${white};
    padding: 20px;
    border-radius: 10px;
    color: ${ black };
    justify-content: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: 800px) {
        & {
            width: 100%;
            align-items: center;
        }
    }
`