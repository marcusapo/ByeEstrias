import { ComponentType } from "@/types/component"
import { IndexProps } from "./models"
import { Main } from "./style"

const InfoBody: React.FC<IndexProps> = ({
    title,
    description,
    legend,
    isDanger,
    type,
}) => {
    const component: ComponentType = {
        notice: (
            <>
                <h5 className="fontGray fontW400">{ title }</h5>
                <h4 className='fontW600'>
                    { description }
                </h4>
                <h5 className="fontGray fontW400 fontNoBreak">{ legend }</h5>
            </>
        ),
        value: (
            <>
                <h5 className="fontGray fontW400">{ title }</h5>
                <h4 className={isDanger === true ? 'fontW800 fontRed' : 'fontW800'}>
                    { description }
                </h4>
                <h5 className="fontGray fontW400 fontNoBreak">{ legend }</h5>
            </>
        )
    }

    return (
        <Main type={type}>
            { component[type] }
        </Main>
    )
}

export default InfoBody