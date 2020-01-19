import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../Klassen/customer";
import {Product} from "../Klassen/product";

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


  public findHandlesFromMaterial(material: string): Observable<string[]> {
    let params = new HttpParams()
      .set ("material",material)
    return this.http.get<string[]>(this.productUrl+"griff",{params: params});
  }

  public findMaterialsFromHandleType(handleType: string): Observable<string[]> {
    let params = new HttpParams()
      .set ("lenkertyp",handleType)
    return this.http.get<string[]>(this.productUrl+"material",{params});
  }
  public findGearsFromHandleType(handleType: string): Observable<string[]> {
    let params = new HttpParams()
      .set ("lenkertyp",handleType)
    return this.http.get<string[]>(this.productUrl+"schaltung", {params});
  }
}
