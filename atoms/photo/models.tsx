import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IndexProps {
    image: string | StaticImport;
    name: string
    store: string
}