export interface Course {
    id: number,       
    name:string,
    description?:string,
    price:number,
    date?:string
    soldOut?:boolean,
    img?:string,
    onSale?:boolean

}
