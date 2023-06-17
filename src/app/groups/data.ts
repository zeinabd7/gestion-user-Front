export interface Groups{
    id:number;
    name:string;
    //droits:string[];
}
export interface Group_Permissions{
    id:number;
    id_group:number;
    id_permissions:number;
}
export interface Permissions{
    id:number;
    name:string;
}