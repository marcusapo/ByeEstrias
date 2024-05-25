import BoxCommon from "../boxCommon"
import { IndexProps } from "./models"
import { Main } from "./style"

const Meter: React.FC<IndexProps> = ({
    left = 'RUIM',
    right = 'ÓTIMO',
}) => {
    return (
        <Main>
            <h4 className="fontW800">{left}</h4>
            <BoxCommon 
                className="gradientRating"
                width="200px"
                height="20px"
                radius="25px"
            >
                <></>
            </BoxCommon>
            <h4 className="fontW800">{right}</h4>
        </Main>
    )
}

export default Meter