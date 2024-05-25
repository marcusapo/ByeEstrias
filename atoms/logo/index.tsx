import { ComponentType } from "@/types/component"

// import LogoSysBlue from '@/assets/logo/magycSysBlue.png'

import { IndexProps } from "./models"
import { Main } from "./style"
import BoxCommon from "../boxCommon"

const Logo: React.FC<IndexProps> = ({
    type,
    mt,
    mr,
    mb,
    ml
}) => {
    const component: ComponentType = {
        main: (
            <></>
            // <Main />
        )
    }

    return (
        <BoxCommon
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
        >
            <></>
            {/* { component[type] } */}
        </BoxCommon>
    )
}

export default Logo