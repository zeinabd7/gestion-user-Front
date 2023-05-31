import { Users } from "../users/data";
export interface Organizations{
    name:string,
    users:Users[],
    id:number,
    entreprise_id:number,
}