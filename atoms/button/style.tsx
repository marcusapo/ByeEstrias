import styled from "styled-components";
import { blue, blueLight, grey, orange, primary, red } from "@/atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const ButtonPrimaryIcon = styled.div<IndexStyledProps>`
    width: 35px;
    user-select:none;
    height: 35px;
    background: ${primary};
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${({ center }) => center && `justify-content: center;`};

    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonPrimarySmall = styled.div<IndexStyledProps>`
    width: 100px;
    user-select:none;
    height: 40px;
    background: ${primary};
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonPrimaryBig = styled.div<IndexStyledProps>`
    width: 160px;
    height: 40px;
    background: ${primary};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonPrimaryFull = styled.div<IndexStyledProps>`
    width: 100%;
    height: 40px;
    background: ${primary};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonSecundarySmall = styled.div<IndexStyledProps>`
    width: 100px;
    height: 40px;
    background: ${blue};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonSecundaryBig = styled.div<IndexStyledProps>`
    width: 160px;
    height: 40px;
    background: ${blue};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonSecundaryFull = styled.div<IndexStyledProps>`
    width: 100%;
    height: 40px;
    background: ${blue};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 14px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonRedSmall = styled.div<IndexStyledProps>`
    width: 100px;
    height: 40px;
    background: ${red};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonRedBig = styled.div<IndexStyledProps>`
    width: 160px;
    height: 40px;
    background: ${red};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonRedFull = styled.div<IndexStyledProps>`
    width: 100%;
    height: 40px;
    background: ${red};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 14px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonBlueLightSmall = styled.div<IndexStyledProps>`
    width: 100px;
    height: 40px;
    background: ${blueLight};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 14px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`

export const ButtonBlueLightBig = styled.div<IndexStyledProps>`
    width: 160px;
    height: 40px;
    background: ${blueLight};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 14px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;

    
`

export const ButtonBlueLightFull = styled.div<IndexStyledProps>`
    width: 100%;
    height: 40px;
    background: ${blueLight};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 14px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;

    &:hover:first-child {
        color: white
    }
`

export const ButtonOrangeBig = styled.div<IndexStyledProps>`
    width: 160px;
    height: 40px;
    background: ${orange};
    user-select:none;
    
    ${({ disabled }) => disabled && `background: ${grey}`};

    border-radius: 9px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${({ center }) => center && `justify-content: center;`};

    padding: 0 15px;
    box-sizing: border-box;
    
    white-space: nowrap;

    margin-top: ${({ mt }) => mt ?? '0px'};
    margin-left: ${({ ml }) => ml ?? '0px'};
    margin-right: ${({ mr }) => mr ?? '0px'};
    margin-bottom: ${({ mb }) => mb ?? '0px'};

    ${({ displayNone }) => displayNone && 'display: none;'};

    cursor: pointer;
`