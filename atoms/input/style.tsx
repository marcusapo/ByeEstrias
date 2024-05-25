import styled from "styled-components";
import { IndexStyledProps } from "./models";
import { black, blue, primary, white } from "@/atomic/constants/colors";

export const Main = styled.div<IndexStyledProps>`
    width: ${({ width }) => width ?? 'null'};
`

export const InputBox = styled.div<IndexStyledProps>`
    ${({ size }) => {
        switch (size) {
            case 'smallest':
                return 'width: 120px; height: 45px;';
            case 'smaller':
                return 'width: 160px; height: 45px;';
            case 'small':
                return 'width: 220px; height: 45px;';
            case 'medium':
                return 'width: 280px; height: 45px;';
            case 'big':
                return 'width: 300px; height: 45px;';
            case 'bigger':
                return 'width: 575px; height: 45px;';
            case 'biggest':
                return 'width: 100%; height: 45px;';
        }
    }};

    background-color: ${white};
    border: 1px solid #c1c1c1;
    border-radius: 15px;

    ${({ mode }) => mode === 'underline' && `
                    background: transparent;
                    border: 0;
                    border-bottom: 2px solid ${blue};
                    border-radius: 0px;
                `}

    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    @media only screen and (max-width: 600px) {
        padding: 0px;
    }
`

export const TextInput = styled.input`
    color: ${black};
    width: 100%;
    height: 100%;
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    font-weight: medium;

    @media only screen and (max-width: 600px) {
        font-size: 17px;
        padding: 5px;
    }
`