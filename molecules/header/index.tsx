import { BoxCommon } from "@/atomic/atoms";
import { IndexProps } from "./models";
import { Main } from "./style";

const Header: React.FC<IndexProps> = ({
    title,
}) => {
    return (
        <Main>
            <BoxCommon
                flexdirection="row"
                alignitems="center"
                gap='10px'
            >
                <h3 className="fontBlack fontW500">{ title }</h3>
            </BoxCommon>
        </Main>
    )
}

export default Header;