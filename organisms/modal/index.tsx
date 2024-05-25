import { BoxCommon, Icon } from "@/atomic/atoms"
import { IndexProps } from "./models"
import { Backdrop, Main } from "./style"

const Modal: React.FC<IndexProps> = ({
    title,
    description,
    icon,
    isVisible,
    children,
    onClose,
}) => {
    return !isVisible ? (
        <></>
    ) : (
        <Backdrop onClick={onClose}>
            <Main onClick={(e) => e.stopPropagation()}>
                <BoxCommon
                    width={icon ? '370px' : 'max-content'}
                    flexdirection={icon && icon.position === 'top' ? 'column' : 'row'}
                    alignitems="center"
                    mb='15px'
                    gap='10px'
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
                    <h1 className="fontBlack fontW400 fontCenter">{ title }</h1>
                </BoxCommon>
                {
                    description && (
                        <BoxCommon
                            width='350px'
                            mb='30px'
                        >
                            <h5 className="fontBlack fontW300 fontCenter">{ description }</h5>
                        </BoxCommon>
                    )
                }
                { children }
            </Main>
        </Backdrop>
    )
}

export default Modal