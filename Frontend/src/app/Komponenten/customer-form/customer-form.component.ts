import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../Service/customer.service";
import {Customer} from "../../Klassen/customer";


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer: Customer;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService) {
    this.customer=new Customer();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.customer.lastName)
    this.customerService.save(this.customer).subscribe(()=> this.router.navigate(['/handlelist']))
  }
}
