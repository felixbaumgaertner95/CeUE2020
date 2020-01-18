import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../Klassen/product";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl: string;
  constructor(private http: HttpClient) {
    this.orderUrl = 'https://www.maripavi.at/bestellung';
  }
  public saveOrder(order: Product) {
    let params = new HttpParams()
      .set ("griff",order.handle,)
      .set("lenkertyp",order.handleType)
      .set("material",order.material)
      .set("schaltung",order.gear);
    return this.http.post<string>(this.orderUrl,null,{"responseType": "text",params});
  }
}
