import { findColor } from "@/atomic/constants/colors";

import IconArrow from "./icons/arrow";
import IconCorrect from "./icons/correct";

import { Main } from "./style";
import { IndexProps } from "./models";
import IconEdit from "./icons/edit";
import IconPaper from "./icons/paper";
import IconPrint from "./icons/print";
import IconDashboard from "./icons/dashboard";
import IconQuestion from "./icons/question";
import IconNotification from "./icons/notification";
import IconUser from "./icons/user";
import IconBuy from "./icons/buy";
import IconStock from "./icons/stock";
import IconSale from "./icons/sale";
import IconFinance from "./icons/finance";
import IconCustomer from "./icons/customer";
import IconIntegrations from "./icons/integrations";
import IconCashFlow from "./icons/cashFlow";
import IconTrophy from "./icons/trophy";
import IconClock from "./icons/clock";
import IconPromotion from "./icons/promotion";
import IconBest from "./icons/best";
import IconDoor from "./icons/door";
import IconOptions from "./icons/options";
import IconUser2 from "./icons/user2";
import IconStore from "./icons/store";
import IconShield from "./icons/shield";
import IconConfig from "./icons/config";
import IconAdd from "./icons/add";
import IconHistoric from "./icons/historic";
import IconClip from "./icons/clip";
import IconArrow2 from "./icons/arrow2";
import IconSend from "./icons/send";

const Icon: React.FC<IndexProps> = ({
    name,
    size,
    fill,
    stroke,
    rotate,
    mt,
    mr,
    ml,
    mb,
    onClick,
    className
}) => {
    const findIcon = () => {
        switch (name) {
            case 'arrow':
                return { icon: <IconArrow />, viewBox: '0 0 10 15'};
            case 'arrow2':
                return { icon: <IconArrow2 />, viewBox: '0 0 50 50'};
            case 'correct':
                return { icon: <IconCorrect />, viewBox: '0 0 25 25'};
            case 'edit':
                return { icon: <IconEdit />, viewBox: '0 0 25 25'};
            case 'paper':
                return { icon: <IconPaper />, viewBox: '0 0 50 50'};
            case 'print':
                return { icon: <IconPrint />, viewBox: '0 0 30 30'};
            case 'buy':
                return { icon: <IconBuy />, viewBox: '0 0 100 100'};
            case 'stock':
                return { icon: <IconStock />, viewBox: '0 0 100 100'};
            case 'sale':
                return { icon: <IconSale />, viewBox: '0 0 110 100'};
            case 'finance':
                return { icon: <IconFinance />, viewBox: '0 0 110 100'};
            case 'customer':
                return { icon: <IconCustomer />, viewBox: '0 0 110 100'};
            case 'integrations':
                return { icon: <IconIntegrations />, viewBox: '0 0 110 100'};
            case 'dashboard':
                return { icon: <IconDashboard />, viewBox: '0 0 100 100'};
            case 'question':
                return { icon: <IconQuestion />, viewBox: '-15 0 200 160'};
            case 'notification':
                return { icon: <IconNotification />, viewBox: '-20 0 180 170'};
            case 'user':
                return { icon: <IconUser />, viewBox: '0 0 180 170'};
            case 'user2':
                return { icon: <IconUser2 />, viewBox: '0 0 100 120'};
            case 'cashFlow':
                return { icon: <IconCashFlow />, viewBox: '0 0 110 100'};
            case 'trophy':
                return { icon: <IconTrophy />, viewBox: '0 0 110 100'};
            case 'clock':
                return { icon: <IconClock />, viewBox: '0 0 110 100'};
            case 'promotion':
                return { icon: <IconPromotion />, viewBox: '0 0 110 100'};
            case 'best':
                return { icon: <IconBest />, viewBox: '0 0 110 100'};
            case 'door':
                return { icon: <IconDoor />, viewBox: '0 0 120 110'};
            case 'options':
                return { icon: <IconOptions />, viewBox: '0 0 5 130'};
            case 'store':
                return { icon: <IconStore />, viewBox: '0 0 100 120'};
            case 'shield':
                return { icon: <IconShield />, viewBox: '0 0 100 125'};
            case 'config':
                return { icon: <IconConfig />, viewBox: '0 0 100 125'};
            case 'add':
                return { icon: <IconAdd />, viewBox: '0 0 100 105'};
            case 'historic':
                return { icon: <IconHistoric />, viewBox: '0 0 60 60'};
            case 'clip':
                return { icon: <IconClip />, viewBox: '0 0 55 80'};
            case 'send':
                return { icon: <IconSend />, viewBox: '-5 0 35 20'};
            default:
                return { icon: null, viewBox: '0 0 738 588' }
        }
    }

    return (
        <Main
            size={size}
            rotate={rotate}
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
            onClick={onClick}
            className={className}
        >
            <svg fill={findColor(fill)} stroke={findColor(stroke)} strokeWidth={2} height="100%" width="100%" viewBox={findIcon().viewBox}>
                { findIcon().icon }
            </svg>
        </Main>
    )
}

export default Icon;