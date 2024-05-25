import { BoxCommon, Icon } from "..";
import { IndexProps } from "./models";
import { Main } from "./style";

const Box: React.FC<IndexProps> = ({
    flex,
    height,
    width,
    icon,
    title,
    children,
    color = 'white',
    className
}) => (
    <Main color={color} flex={flex} height={height} width={width} className={className}>
        { title && (
            <BoxCommon
                width='100%'
                flexdirection="row"
                justifycontent='flex-start'
                alignitems="center"
            >
                <BoxCommon
                    gap='5px'
                    flexdirection="row"
                    alignitems="center"
                >
                    <Icon
                        name={icon?.name}
                        fill={icon?.fill}
                        size={icon?.size}
                        stroke={icon?.stroke}
                    />
                    <h4 className='fontW600'>
                        { title }
                    </h4>
                </BoxCommon>
            </BoxCommon>
        ) }
        { children }
    </Main>
)

export default Box;