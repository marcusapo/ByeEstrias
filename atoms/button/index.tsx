import { memo } from "react"
import { BoxCommon, Icon } from ".."
import { IndexProps } from "./models"
import { ButtonBlueLightBig, ButtonBlueLightFull, ButtonBlueLightSmall, ButtonOrangeBig, ButtonPrimaryBig, ButtonPrimaryFull, ButtonPrimaryIcon, ButtonPrimarySmall, ButtonRedBig, ButtonRedFull, ButtonRedSmall, ButtonSecundaryBig, ButtonSecundaryFull, ButtonSecundarySmall } from "./style"
import ArrowIcon from "../icon/completed/arrow"
import { ComponentType } from "@/types/component"

const Button: React.FC<IndexProps> = ({
    icon,
    text,
    onClick,
    type,
    arrowDirection,
    disabled,
    displayNone,
    center,
    id,
    mt,
    mr,
    mb,
    ml,
    className
}) => {
    const component: ComponentType = {
        primaryIcon: (
            <ButtonPrimaryIcon
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                </BoxCommon>
            </ButtonPrimaryIcon>
        ),
        primarySmall: (
            <ButtonPrimarySmall
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonPrimarySmall>
        ),
        primaryBig: (
            <ButtonPrimaryBig
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonPrimaryBig>
        ),
        primaryFull: (
            <ButtonPrimaryFull
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonPrimaryFull>
        ),

        secundarySmall: (
            <ButtonSecundarySmall
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite fontW700"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonSecundarySmall>
        ),
        secundaryBig: (
            <ButtonSecundaryBig
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite fontW700"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonSecundaryBig>
        ),
        secundaryFull: (
            <ButtonSecundaryFull
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite fontW700"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonSecundaryFull>
        ),
        redSmall: (
            <ButtonRedSmall
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite fontW700"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonRedSmall>
        ),
        redFull: (
            <ButtonRedFull
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonRedFull>
        ),
        redBig: (
            <ButtonRedBig
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonRedBig>
        ),
        blueLightSmall: (
            <ButtonBlueLightSmall
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontBlack fontW700"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonBlueLightSmall>
        ),
        blueLightBig: (
            <ButtonBlueLightBig
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontBlack fontW700"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonBlueLightBig>
        ),
        blueLightFull: (
            <ButtonBlueLightFull
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontBlack fontW700"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonBlueLightFull>
        ),
        orangeBig: (
            <ButtonOrangeBig
                onClick={onClick}
                disabled={disabled}
                displayNone={displayNone}
                center={center}
                mt={mt}
                mr={mr}
                mb={mb}
                ml={ml}
                className={className}
            >
                <BoxCommon
                    flexdirection="row"
                    gap='5px'
                >
                    {
                        icon && (
                            <Icon
                                name={icon.name}
                                fill={icon.fill}
                                size={icon.size}
                                stroke={icon.stroke}
                            />
                        )
                    }
                    <h4
                        className="cursor fontWhite fontW700"
                    >
                        { text }
                    </h4>
                </BoxCommon>
                {
                    arrowDirection && (
                        <ArrowIcon direction={arrowDirection} />
                    )
                }
            </ButtonOrangeBig>
        ),
    }

    return component[type]
}

export default memo(Button)