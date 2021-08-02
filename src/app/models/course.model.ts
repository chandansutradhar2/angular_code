export interface Course{
    id?:string;
    name:string;
    description:string;
    duration:number;
    price:number;
    deliveryMode:string[];
    enabled:boolean;
    createdOn:number;
    createdBy:string;
}