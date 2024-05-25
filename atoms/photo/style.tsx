import { primary, white } from "@/atomic/constants/colors";
import Img from "next/image";
import styled from "styled-components";

const MAIN_SIZE = '100px'

export const BoxImage = styled.section`
    width: ${MAIN_SIZE};
    height: ${MAIN_SIZE};
    border-radius: ${MAIN_SIZE};
    background: linear-gradient(90deg, ${white} -85%, ${primary} 100%);
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
`

const IMAGE_SIZE = '93px'

export const Image = styled(Img)`
    width: ${IMAGE_SIZE};
    height: ${IMAGE_SIZE};
    border-radius: ${IMAGE_SIZE};
    object-fit: contain;
    border: 3px solid ${white};
`

export const Input = styled.input`
    display: none;
`