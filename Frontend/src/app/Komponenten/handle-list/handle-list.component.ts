import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../Service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../Service/product.service";
import {Product} from "../../Klassen/product";
import {FormControl, Validators} from "@angular/forms";
import {OrderService} from "../../Service/order.service";
import {MatDialog} from "@angular/material/dialog";
import {OrderOverviewComponent} from "../order-overview/order-overview.component";

@Component({
  selector: 'app-handle-list',
  templateUrl: './handle-list.component.html',
  styleUrls: ['./handle-list.component.css']
})
export class HandleListComponent implements OnInit {
  handleControl = new FormControl('', [Validators.required]);
  handletypeControl = new FormControl('', [Validators.required]);
  materialControl = new FormControl('', [Validators.required]);
  gearControl = new FormControl('', [Validators.required]);
  handles: string[];
  handleTypes: string[];
  materials: string[];
  gears: string[];
  order: Product;
  test: string;

  constructor(private productService: ProductService,
              private orderService: OrderService,
              public dialog: MatDialog) {
    this.order=new Product;
  }

  ngOnInit() {
    this.productService.findAllHandles().subscribe(data => {
      this.handles=data;
    });
    this.productService.findAllHandleTypes().subscribe(data => {
      this.handleTypes=data;
    });
    this.productService.findAllMaterials().subscribe(data => {
      this.materials=data;
    });
    this.productService.findAllGears().subscribe(data => {
      this.gears=data;
    });
  }

  onSubmit() {
    this.orderService.setOrder(this.order);
    const dialogRef= this.dialog.open(OrderOverviewComponent, {
      height: '600px',
      width: '400px'
    })
  }

  handleTypeChanged() {
    this.productService.findGearsFromHandleType(this.order.handleType).subscribe(data=>this.gears=data)
    this.productService.findMaterialsFromHandleType(this.order.handleType).subscribe(data=>this.materials=data)
  }

  materialChanged() {
    this.productService.findHandlesFromMaterial(this.order.material).subscribe(data=>this.handles=data)
  }
}
