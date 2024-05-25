import { Header } from "@/atomic/molecules";
import { IndexProps } from "./models";
import { Main, Section } from "./style";
import Head from "next/head";
import { BoxCommon, Icon } from "@/atomic/atoms";
import Image from "next/image";
import ManHome from '@/assets/manChat.png'
import { Dispatch } from "redux";
import { LoginTypes } from "@/services/redux/reducers/login/models";
import { connect } from "react-redux";

const Container: React.FC<IndexProps> = ({
    dataUser,
    title,
    children,
    header = 'contain',
    noPadding
}) => (
    <Main>
        {
            header === 'contain' && (
                <BoxCommon width="100%" mt='10px'>
                    <BoxCommon 
                        width="100%"
                        pl='20px'
                        pr='20px'
                        mb='15px'
                        flexdirection="row"
                        alignitems="center"
                        justifycontent="space-between"
                    >
                        <BoxCommon
                            flexdirection="row"
                            alignitems="center"
                            gap="15px"
                        >
                            <Image src={ManHome} alt="" width={50}/>
                            <h3>{ dataUser?.name }</h3>
                        </BoxCommon>
                        <Icon 
                            fill="black"
                            name="user2"
                            stroke="black"
                            size={30}
                            mt='1%'
                        />
                    </BoxCommon>
                    <BoxCommon width="100%" height="1px" bgColor="#d9d9d9" mb='10px'>{''}</BoxCommon>
                    {children}
                </BoxCommon>
            )
        }
        
        <Head>
            <title>{ title }</title>
        </Head>
        <BoxCommon>
            <Section noPadding={noPadding}>
                { children }
            </Section>
        </BoxCommon>
    </Main>
)

const mapStateToProps = ({
    loginReducer
}: {
    loginReducer: LoginTypes
}) => ({
    dataUser: loginReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Container);