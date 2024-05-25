import { blue, greyLight } from "@/atomic/constants/colors";
import styled from "styled-components";
import { IndexStyledProps } from "./models";

export const Main = styled.section`
    width: 100vw;
    background: ${greyLight};
    overflow: hidden;
    flex-direction: row;
`

export const Section = styled.div<IndexStyledProps>`
    height:100vh;
    width:100vw;
    gap: 25px;
    padding: 25px;

    /* ${({noPadding}) => noPadding === 'none' && `
        padding:none;
    `} */

${({ noPadding }) => noPadding === 'none' && `
                    padding:0px;
                `}

    overflow: auto;

    @media only screen and (max-width: 800px) {
        & {
            flex-direction: column;
            padding: 10px 15px;
        }
    }
`