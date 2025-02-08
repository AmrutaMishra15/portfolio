import { Tag } from "./Tag";

export interface Projects{
    id:number;
    name:string;
    summary:string;
    description:string;
    projectLink:String;
    pictures:string[];
    tags:Tag[];
}