import {Component, OnInit} from '@angular/core';
import {Order} from "../../Klassen/order";
import {Customer} from "../../Klassen/customer";
import {OrderService} from "../../Service/order.service";
import {Product} from "../../Klassen/product";
import {CustomerService} from "../../Service/customer.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {

  responseStatus: number;
  customer: Customer;
  order: Product;

  constructor(
    private customerService: CustomerService,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<OrderOverviewComponent>
  ) {
  }

  ngOnInit() {
    this.customer = this.customerService.getCustomer();
    this.order = this.orderService.getOrder();
  }

  onSubmit() {
    return this.orderService.saveOrder(this.order).subscribe(result => {
      console.log(result);
      this.responseStatus=result.status;
    });
  }

  onEnd() {
    this.dialogRef.close();
  }
}
