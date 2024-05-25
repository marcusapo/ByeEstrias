import { TypeAnalysisType } from "@/services/firebase/pacient/models";

export interface IndexProps {
    title: string;
    description: string;
    legend: string;
    isDanger?: boolean;
    type: TypeAnalysisType
}

export type IndexStyledProps = Pick<IndexProps, 'type'>