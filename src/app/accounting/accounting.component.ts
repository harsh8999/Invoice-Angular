import { Component, OnInit, Input } from '@angular/core';
import { ItemClass, TotalClass } from '../ItemsClass';
import { FormControl } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

  
  count:number = 1;
  discount:number = 0;
  tax:number = 0;
  public TotalObj:TotalClass = {
    total: 0,
    subtotal: 0
    
  }
  public items:ItemClass[] = [
    {
    name: '',
    quantity: 0,
    price: 0,
    amount: 0
  }
];
  
  constructor() { }

  ngOnInit() { }
  
  add()
  {
    this.items.push({
      name: '',
      quantity: 0,
      price: 0,
      amount: 0
    })
    this.count = this.count + 1;
    console.log(this.items);
  }

  remove(index){
    this.items.splice(index,1);
    this.count -= 1;
    console.log(this.items);
  }

  myTotal(){
      
    // let i: number = 0;
    this.TotalObj.total= 0;
    
    //----------------
    //Wrong Logic
    // while (i < this.count) {
    //   total = total + ((this.items[i].quantity as number) * (this.items[i].price as number));
    //     i++;
    // }
    //----------------


    for(let item of this.items){
      this.TotalObj.total = (this.TotalObj.total as number) + ((item.quantity as number) * (item.price as number));
    }
    
    this.TotalObj.total = (this.TotalObj.total as number) - this.discount;
    this.TotalObj.total = (this.TotalObj.total as number) + (this.tax * (this.TotalObj.subtotal as number) / 100);
    
    return (this.TotalObj.total as number);
  }

  myAmount(index){
    this.items[index].amount =  ((this.items[index].quantity as number) * (this.items[index].price as number));
    return this.items[index].amount;
  }
  
  setDiscount(dis){
    this.discount = dis;
    this.myTotal();
  }

  setTax(t){
    this.tax = t;
    this.myTotal();
  }

  mySubTotal(){
      
    
    this.TotalObj.subtotal= 0;

    for(let item of this.items){
      this.TotalObj.subtotal = (this.TotalObj.subtotal as number) + ((item.quantity as number) * (item.price as number));
    }
    return (this.TotalObj.subtotal as number);
  }

}
