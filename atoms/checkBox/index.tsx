import BoxCommon from "../boxCommon";
import { IndexProps } from "./models";
import { Check, Checked, Info } from "./style";

const CheckBox: React.FC<IndexProps> = ({
    label,
    description,
    isChecked,
    onCheck
}) => (
    <BoxCommon
        flexdirection="row"
        gap='7px'
        alignitems="center"
        onClick={onCheck}
    >
        <Check>
            {
                isChecked && (
                    <Checked />
                )
            }
        </Check>
        <BoxCommon flex={1}>
            <h5 className="fontBlack">{ label }</h5>
            {
                description && (
                    <h6 className="fontW300 fontBlack">{ description }</h6>
                )
            }
        </BoxCommon>
            <Info>
                <h6 className="fontBlack fontSmall">i</h6>
            </Info>
    </BoxCommon>
)

export default CheckBox;