import { ReactElement } from "react";

export interface Ibutton {
    text:string | ReactElement,
    onClick:() => void
}