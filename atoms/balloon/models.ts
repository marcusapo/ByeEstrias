import { MessageType } from "@/types/messages";

export interface IndexProps extends Omit<MessageType, 'type'> {}

export type IndexStyledProps = Pick<IndexProps, 'author'>