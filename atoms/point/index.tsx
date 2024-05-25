import { Position } from "@/atomic/constants/spacing";
import { IndexProps } from "./models"
import { Main } from "./style"

const Point: React.FC<IndexProps> = ({
    specialization,
    status,
    onSelect,
}) => {
    const findPosition = (): Position => {
        switch (specialization.toLowerCase()) {
            case 'neurologia':
                return {
                    top: '55px',
                    left: '260px'
                }
            case 'otorrinolaringologia':
                return {
                    top: '85px',
                    left: '210px'
                }
            case 'endocrinologia':
                return {
                    top: '140px',
                    left: '245px'
                }
            case 'oftalmologia':
                return {
                    top: '90px',
                    left: '245px'
                }
            case 'psiquiatria':
                return {
                    top: '65px',
                    left: '220px'
                }
            case 'infectologia':
                return {
                    top: '180px',
                    left: '210px'
                }
            case 'oncologia':
                return {
                    top: '240px',
                    left: '210px'
                }
            case 'urologia':
            case 'ginecologia':
                return {
                    top: '360px',
                    left: '245px'
                }
            case 'cardiologia':
                return {
                    top: '200px',
                    left: '270px'
                }
            case 'nefrologia':
                return {
                    top: '330px',
                    left: '200px'
                }
            case 'gastrologia':
            case 'gastroenterologia':
                return {
                    top: '270px',
                    left: '270px'
                }
            default:
                return {}
        }
    }

    return specialization.toLowerCase() === ('clínica geral' || 'família') ? (
        <></>
    ) : (
        <Main
            position={findPosition()}
            status={status}
            onClick={onSelect}
        />
    )
}

export default Point