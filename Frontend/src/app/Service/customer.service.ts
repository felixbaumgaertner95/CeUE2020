import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../Klassen/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/customer';
  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.usersUrl);
  }
  public findCustomer(lastName: string): Observable<Customer> {
    return this.http.get<Customer>(this.usersUrl +lastName);
  }

  public save(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.usersUrl+"/add", customer);
  }
}
