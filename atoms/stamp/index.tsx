import { ColorType, findColor } from "@/atomic/constants/colors";
import { IndexProps } from './models';
import { Main } from './style';
import { memo } from "react";

const Stamp: React.FC<IndexProps> = ({
    label,
    color,
}) => (
    <Main color={findColor(color) as ColorType}>
        <h6 className={label.color}>{ label.text }</h6>
    </Main>
)

export default memo(Stamp);