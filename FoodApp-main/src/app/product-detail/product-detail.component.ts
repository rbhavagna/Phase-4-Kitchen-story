import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BuyProductComponent } from '../buy-product/buy-product.component';
import { product } from '../datatype';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productData : undefined | product
  pro:any
 
  public searchTerm : string = ''
  searchKey:string = '';

  constructor(private activeRoute:ActivatedRoute, private service:ProductService, private dialog:MatDialog){}

 ngOnInit():void{
  

 
 

  let productId = this.activeRoute.snapshot.paramMap.get('productId');
  productId && this.service.productList(productId).subscribe((res)=>{
this.productData = res
  })
  this.getAllFood()
    
 }

 getAllFood(){
  this.service.getProduct()
  .subscribe({
    next:(res)=>{
      //alert("product Fetched")
    
      this.pro = res
      console.log(this.productData)
     
    }
  })
 }
 buyProduct(row:any){

  this.dialog.open(BuyProductComponent, {
    data : row
  })

}



search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value
  console.log(this.searchTerm)
  this.service.search.next(this.searchTerm)
}

}