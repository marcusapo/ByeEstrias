import { green, black } from "@/atomic/constants/colors";
import styled from "styled-components";

const CHECK_SIZE = '15px'

export const Check = styled.div`
    width: ${CHECK_SIZE};
    height: ${CHECK_SIZE};
    border-radius: 5px;
    border: 1px solid ${black};
    justify-content: center;
    align-items: center;
`

const CHECKED_SIZE = '9px';

export const Checked = styled.div`
    width: ${CHECKED_SIZE};
    height: ${CHECKED_SIZE};
    border-radius: 3px;
    background-color: ${green};
`

const INFO_SIZE = '13px'

export const Info = styled.div`
    width: ${INFO_SIZE};
    height: ${INFO_SIZE};
    border-radius: ${INFO_SIZE};
    border: 1px solid ${black};
    justify-content: center;
    align-items: center;
`