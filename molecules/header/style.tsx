import { grey } from "@/atomic/constants/colors";
import styled from "styled-components";

export const Main = styled.header`
    width: 100%;
    height: 100px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    border-bottom: 1px solid ${grey};
`