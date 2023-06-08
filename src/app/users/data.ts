export interface Users{
    id?:number;
    username?: string
    name?:string;
    email?:string;
    password?:string;
    role?:string;
    entreprise_id?:number;
    entreprise_name?:string;
    token?:string;
    group:Group[],
}
export interface Group{
    id:number;
    name:string;
    droits:string[];
}
