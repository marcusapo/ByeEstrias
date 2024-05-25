import { BoxCommon, Icon } from "@/atomic/atoms"

import { IndexProps, StatusType } from "./models"
import { Line, Main, Ranked, Status } from "./style"
import useMediaQuery from "@/hooks/useMediaQuery"

const Table: React.FC<IndexProps> = ({
    type = 'big',
    columns,
    data,
    selectedItem,
    onDoubleClick,
    onClick,
    hasBorder,
}) => (
    <Main>
        <BoxCommon width={useMediaQuery('(max-width: 800px)') ? '900px' : '100%'} flexdirection="row" mb='10px'>
            {
                columns?.map((item, index) => (
                    <BoxCommon
                        flex={item.size}
                        justifycontent="center"
                        alignitems={item.align}
                        key={index}
                        pl='15px'
                    >
                        <h6 className={`fontW${item.weight} fontGray fontCenter`}>{ String(item.label) }</h6>
                    </BoxCommon>
                ))
            }
        </BoxCommon>
        <BoxCommon gap={(type === 'big' && !hasBorder) ? '15px' : '0'}>
            {
                data?.map((item, row) => (
                    <Line
                        key={row}
                        selected={item.id === selectedItem}
                        onClick={() => onClick && onClick(item.id)}
                        onDoubleClick={() => onDoubleClick(item.id)}
                        type={type}
                        hasBorder={!!hasBorder}
                    >
                        {
                            item.data?.map((item, index) => (
                                <BoxCommon
                                    flex={item.size}
                                    justifycontent="center"
                                    alignitems={item.align}
                                    onClick={item.onClick && item.onClick}
                                    key={index}
                                >
                                    <h6 className={`fontW${item.weight} font${item.color}`}>
                                        {
                                            item.isRanked ? (
                                                <Ranked position={row}>
                                                    <h4 className={row <= 2 ? 'fontWhite' : 'fontBlack'}>{ item.label }</h4>
                                                </Ranked>
                                            ) : item.label
                                        }
                                        {
                                            item.status && (
                                                <Status status={item.status as StatusType} />
                                            )
                                        }
                                    </h6>
                                </BoxCommon>
                            ))
                        }
                    </Line>
                ))
            }
        </BoxCommon>
    </Main>
)

export default Table