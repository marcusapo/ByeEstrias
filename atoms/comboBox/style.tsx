import styled from "styled-components";
import { black, white } from "@/atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.div<IndexStyledProps>`
    all: inherit;
    ${({ size }) => {
        switch (size) {
            case 'small':
                return 'width: 180px; height: 45px;';
            case 'medium':
                return 'width: 280px; height: 45px;';
            case 'big':
                return 'width: 300px; height: 45px;';
            case 'biggest':
                return 'width: 100%; height: 45px;';
        }
    }}
    background-color: ${white};
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 15px;

    border: 1px solid #c1c1c1;
    font-weight:bold;
    user-select: none;
`

export const Select = styled.select`
    width: 100%;
    height: 100%;
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 16px;
    color: ${black};
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    padding: 0 15px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    user-select: none;
`