import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sender, Update } from './ItemsClass';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private myheader = new HttpHeaders().set('Content-Type', 'application/json')
  myData: Object;
  baseUrl = "http://localhost:5000/bill";
  constructor(private httpClient:HttpClient) { }

  mypostProduct(t:Sender) {
      this.httpClient.post(this.baseUrl,t, {
        headers:this.myheader
      }).subscribe(
        data=>
        {
          console.log("Success");
        }
      );
    }
  

  getBills(){
    return this.httpClient.get(this.baseUrl);
  }

  getBill_by_id(id:number){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(t:Update){
    this.httpClient.put(`${this.baseUrl}/${t.id}`,t,{headers:this.myheader}).subscribe(
      data=>
      {
        console.log("Put Done");
      }
    );
  }
  
  delete(id:number){
    this.httpClient.delete(`${this.baseUrl}/${id}`).subscribe(
      data=>
      {
        console.log("delete Done");
      }
    );;
  }
}
