import { IndexProps } from "./models"
import { Main } from "./style"

const Balloon: React.FC<IndexProps> = ({
    author,
    text,
}) => (
    <Main author={author}>
        <h4 className={`fontW500 ${author === 'system' ? 'fontBlack' : 'fontWhite'}`}>{ text }</h4>
    </Main>
)

export default Balloon