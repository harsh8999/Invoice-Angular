import { RouterModule, Route } from '@angular/router';
import { CustomerService } from './customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { AccountingComponent } from './accounting/accounting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';


const routes: Route[] = [
  {
    path: 'account', component:AccountingComponent
  },
  {
    path: 'display', component:DisplayComponent
  },
  {
    path: 'edit/:id', component:AccountingComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountingComponent,
    DisplayComponent,
    EditAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
}
)
export class AppModule { 
    name: string;
}

