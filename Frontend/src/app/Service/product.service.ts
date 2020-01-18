import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../Klassen/customer";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productUrl: string;
  constructor(private http: HttpClient) {
    this.productUrl = 'https://www.maripavi.at/produkt/';
  }

  public findAllHandles(): Observable<string[]> {
    return this.http.get<string[]>(this.productUrl+"griff");
  }
  public findAllHandleTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.productUrl+"lenkertyp");
  }
  public findAllMaterials(): Observable<string[]> {
    return this.http.get<string[]>(this.productUrl+"material");
  }
  public findAllGears(): Observable<string[]> {
    return this.http.get<string[]>(this.productUrl+"schaltung");
  }
}
