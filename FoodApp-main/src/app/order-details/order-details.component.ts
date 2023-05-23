import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../datatype';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  orderDetails : any
  productData : undefined | product
  constructor( private service:ProductService,private activeRoute:ActivatedRoute){}
  ngOnInit():void{

  this.getOrder()

}

getOrder(){
  this.service.getOrder()
  .subscribe((res)=>{
    this.orderDetails = res
    console.log(res)
  })
}

}
