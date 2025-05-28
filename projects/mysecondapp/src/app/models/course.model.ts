export interface Course {
    id: number,       
    name?:string,
    description?:string,
    price:number,
    date?:string
    soldOut?:boolean,
    img?:string,
    onSale?:boolean
    // Add any other properties you need for the course model
    title?:string

}
