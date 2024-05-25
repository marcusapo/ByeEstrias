import { Rotate } from "@/atomic/constants/align"
import { BoxCommon } from ".."
import ArrowIcon from "../icon/completed/arrow"
import { IndexProps } from "./models"
import { Main, Select } from "./style"

const ComboBox: React.FC<IndexProps> = ({
    label,
    showLabel,
    size,
    options,
    onChange,
    defaultOption,
    selected,
}) => (
    <BoxCommon width={size === 'biggest' ? '100%' : 'max-content'}>
        { showLabel && <h5 className="fontW600 fontNoBreak" style={{ marginBottom: 5 }}>{ label }</h5> }
        {/* @ts-ignore */}
        <Main size={size} onChange={(event) => onChange(event.target.value)}>
            <BoxCommon>
                <h6 className="fontGrey">{ !showLabel ? label : 'Selecione' }</h6>
            </BoxCommon>
            <ArrowIcon size={15} direction={Rotate.bottom} />
            <Select>
                {
                    defaultOption && (
                        <option disabled selected>{ typeof defaultOption === 'string' ? defaultOption : 'Selecione'}</option>
                    )
                }
                {
                    options && options.map((item, index) => (
                        <option value={item.value} key={index} selected={selected === index}>{ item.label }</option>
                    ))
                }
            </Select>
        </Main>
    </BoxCommon>
)

export default ComboBox