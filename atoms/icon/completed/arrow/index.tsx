import Icon from "../.."
import { IndexProps } from "./models"

const ArrowIcon: React.FC<IndexProps> = ({
    size = 10,
    direction,
}) => (
    <Icon
        name='arrow'
        fill='transparent'
        size={size}
        stroke='black'
        rotate={direction}
    />
)

export default ArrowIcon