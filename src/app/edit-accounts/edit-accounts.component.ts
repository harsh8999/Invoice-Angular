import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { ItemClass } from '../ItemsClass';


@Component({
  selector: 'app-edit-accounts',
  templateUrl: './edit-accounts.component.html',
  styleUrls: ['./edit-accounts.component.css']
})
export class EditAccountsComponent implements OnInit {

  data:Object;
  show:Object;
  id: any;
  constructor(private _customerService:CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this._customerService.getBill_by_id(this.id).subscribe(
      (data)=>
      {
        console.log(data)
        this.data = data;
      }
      );
  }

  // public items:ItemClass[] = [
      //     {
      //       name: '',
      //       quantity: 0,
      //       price: 0, 
      //       amount: 0 
      //   }
}
