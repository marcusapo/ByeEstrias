import { IndexProps } from "./models";
import { Main } from "./style";

const Touch: React.FC<IndexProps> = ({
    isCenter,
    isSelected,
    onClick,
    children
}) => (
    <Main onClick={onClick} isCenter={isCenter} isSelected={isSelected}>
        { children }
    </Main>
)

export default Touch