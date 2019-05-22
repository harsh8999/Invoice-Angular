export class ItemClass{
    
    name: string;
    quantity:Number;
    price:Number;
    amount:Number;
}

export class TotalClass{
    discount:Number;
    total: Number;
    subtotal: Number;
    tax:Number;
}

export class Sender{
    id:number;
    
    item:ItemClass[];
    total:TotalClass
}
export class Update{
    id:number;
    item:ItemClass[];
    total:number;
    subtotal:number;
    tax:number;
    discount:number;
}