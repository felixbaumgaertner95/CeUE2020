import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../Klassen/product";
import {Order} from "../Klassen/order";
import {ProcessObject} from "jasmine-spec-reporter/built/display/logger";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl: string;
  private order: Product;
  constructor(private http: HttpClient) {
    this.orderUrl = 'https://www.maripavi.at/bestellung';
  }
  public saveOrder(order: Product) {
    this.order=order;

    let params = new HttpParams()
      .set ("griff",order.handle,)
      .set("lenkertyp",order.handleType)
      .set("material",order.material)
      .set("schaltung",order.gear);
    return this.http.post(this.orderUrl,null,{ params:params, observe: 'response', responseType: "text"});
  }

  public setOrder(order: Product) {
    this.order=order;
    return;
  }
  public getOrder():Product {
    return this.order;
  }
}
