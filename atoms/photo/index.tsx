import { useState } from "react";
import BoxCommon from "../boxCommon";
import { IndexProps } from "./models";
import { BoxImage, Image, Input } from "./style";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Photo: React.FC<IndexProps> = ({
    image,
    name,
    store
}) => {
    const [file, setFile] = useState<string | StaticImport>(image)

    return (
        <BoxCommon
            width="100%"
            alignitems="center"
            justifycontent="center"
        >
            <Input type='file' id='fileUser' onChange={(event) => null} />
            <BoxImage
                // @ts-ignore
                onClick={() => document.getElementById('fileUser').click()}
            >
                <Image src={file} alt={name} />
            </BoxImage>
            <h3 className="fontBlack">{ name }</h3>
            <h5 className="fontBlack fontW400">{ store }</h5>
        </BoxCommon>
    )
}

export default Photo;