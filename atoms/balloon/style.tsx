import styled from "styled-components";
import { IndexStyledProps } from "./models";
import { blue, blueLight, white } from "@/atomic/constants/colors";

export const Main = styled.div<IndexStyledProps>`
    max-width: 400px;
    border-radius: 10px;
    border: 1px solid ${blueLight};
    padding: 20px;
    background: ${({ author }) => author === 'system' ? `${white}` : `${blue}`};
`