import { Update } from './../ItemsClass';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:[CustomerService]
})
export class DisplayComponent implements OnInit {

  // data:string[]=['1','2','3','',''];        //declaration 
  data:Object[];

  constructor(private _customerService:CustomerService) { }

  ngOnInit() {
      
      // call service to get bills
      this._customerService.getBills().subscribe(
      (data)=>
      {
        console.log(data);
        this.data = data;
      }
      );
      
  }

  updater(i){
    let r:Update = {
      id:i+1,
      item:this.data[i].item,
      total:this.data[i].total,
      subtotal:this.data[i].subtotal,
      discount:this.data[i].discount,
      tax:this.data[i].tax
      };
      console.log(r);
    this._customerService.update(r);
  }


  deleteInvoice(i,index){
    this._customerService.delete(i);
    this.data.splice(index,1);
  }
}
