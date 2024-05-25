import { BoxCommon, Button, Icon } from "@/atomic/atoms"
import { IndexProps } from "./models"
import { Main, Section } from "./style"
import { useState } from "react"
import photoBody from '@/assets/photoBody.png'
import Image from "next/image"
import { Rotate } from "@/atomic/constants/align"

const Expanded: React.FC<IndexProps> = ({
    date,
    text,
    type
}) => {

    const [expand, setExpand] = useState(false)

    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <Main onClick={handleExpand}>
            <h5 className="fontW400 fontGray">{date}</h5>
            <BoxCommon flexdirection="row" justifycontent="space-between" width="100%">
                <Icon
                    fill="transparent"
                    name="arrow"
                    rotate={expand === true ? Rotate.top : Rotate.bottom}
                    size={20}
                    stroke="black"
                />
                <Section>
                    <h3 className="fontNoBreak">{type}</h3>
                    {
                        expand === true && (
                            <BoxCommon width="100%" alignitems="flex-end">
                                <h5 className="fontW700 fontGray textEnd">{text}</h5>
                                <BoxCommon width="100%" gap="10px" mt='20px' justifycontent="flex-start">
                                    <Image
                                        alt=""
                                        src={photoBody}
                                    />
                                    <Button
                                        onClick={() => null}
                                        text="Visualizar"
                                        type="secundaryBig"
                                        center
                                    />
                                </BoxCommon>
                            </BoxCommon>
                        )
                    }
                </Section>
            </BoxCommon>
            <BoxCommon 
                width="100%" 
                height="1px" 
                bgColor="#d7d7d7"
                mt='10px'
            >{''}</BoxCommon>
        </Main>
    )
}

export default Expanded