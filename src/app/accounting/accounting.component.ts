import { Update } from './../ItemsClass';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../customer.service';
import { AppModule } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { ItemClass, TotalClass, Sender } from '../ItemsClass';
import { Location } from '@angular/common';




@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  
  id:any;
  count:number = 1;
  discount:number = 0;
  tax:number = 0;
  isUpdateMode = false;
  public TotalObj:TotalClass = {
    discount:0,
    total: 0,
    subtotal: 0,
    tax:0
  }
  public items:ItemClass[] = [
  //   {
  //     username:'',
  //     name: '',
  //     quantity: 0,
  //     price: 0, 
  //     amount: 0 
  // }
];

  
  postProduct () {
    
  let t:Sender = {
    id:null,
    
    item:this.items,
    total:this.TotalObj
    };
    
    
    if(this.isUpdateMode){
      this.id = this.route.snapshot.paramMap.get("id");
      let r:Update = {
        id:this.id as number,
        item:this.items,
        total:this.TotalObj.total as number,
        subtotal:this.TotalObj.subtotal as number,
        discount:this.discount,
        tax:this.tax
        };
      this._customerService.update(r);
    }
    else{
      this._customerService.mypostProduct(t);
    }
  //  this.reload();
    
  }

  // reload():void{
  //   this._router.navigateByUrl("/account",{skipLocationChange: true}).then(()=>
  //   {console.log(decodeURI(this._location.path()));
  //   this._router.navigate([decodeURI(this._location.path())]);
  //   });
  // }

  constructor(public _router:Router,public _location: Location,private _customerService:CustomerService,
              private activatedRoute:ActivatedRoute,
              private route: ActivatedRoute          
            ){
    this.activatedRoute.paramMap.subscribe(
      (param)=>{
        const id = param.get('id');
        if(id){
          this.getBill(id);
        }
      }
    )
  }
  editBill(data){
    console.log(data)
    this.isUpdateMode = true;
    this.items = data.item
    this.discount = data.discount;
    this.tax = data.tax
  }
  getBill(id){
    this._customerService.getBill_by_id(id).subscribe(
      (data)=>{
        this.editBill(data)
      }
    )
  }
  ngOnInit() {
    
   }
  

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
    this.TotalObj.total= 0;

    for(let item of this.items){
      this.TotalObj.total = (this.TotalObj.total as number) + ((item.quantity as number) * (item.price as number));
    }
    
    this.TotalObj.total = (this.TotalObj.total as number) - this.discount;
    this.TotalObj.total = (this.TotalObj.total as number) + (this.tax * (this.TotalObj.subtotal as number) / 100);
    this.TotalObj.discount = this.discount;
    this.TotalObj.tax = this.tax;
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




  // --------------------
  getBills(){
    // call service
    this._customerService.getBills();
  }
  // --------------------

}
