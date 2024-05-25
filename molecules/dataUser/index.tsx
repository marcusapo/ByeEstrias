import { BoxCommon } from "../../atoms"
import Button from "../../atoms/button"
import { IndexProps } from "./models"
import { GroupButton, Main } from "./style"

const DataUser: React.FC<IndexProps> = ({
    name,
    visualization
}) => {
    return (
        <Main >
            <h4 className="fontW700">{name}</h4>
            <GroupButton>
                <Button
                    onClick={() => null}
                    text="Métricas"
                    type="redSmall"
                    center
                />
                <Button
                    onClick={() => null}
                    text="Exames"
                    type="redSmall"
                    center
                />
                <Button
                    onClick={() => null}
                    text="Mapa"
                    type="primarySmall"
                    center
                />
            </GroupButton>
                <Button
                    onClick={visualization}
                    mt='10px'
                    text="Visualizar"
                    type="secundaryFull"
                    center
                />
        </Main>
    )
}


export default DataUser