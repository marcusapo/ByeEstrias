import styled from "styled-components";
import { MainStyledProps } from "./models";

export const Main = styled.div<MainStyledProps>`
    padding: 5px;
    border-radius: 5px;
    background-color: ${({ color }) => color };
    align-items: center;
`