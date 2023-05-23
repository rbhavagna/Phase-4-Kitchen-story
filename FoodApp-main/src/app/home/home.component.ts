import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { BuyProductComponent } from '../buy-product/buy-product.component';
import { product } from '../datatype';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productlist:any
 
  dataArray=[];
  displayedColumns:string[]= ['id','hotelName','category','price','foodDetail','foodName','url','action']
  dataSource:any
  addProductMessage: string | undefined;
  constructor(private product:ProductService, private router:Router,private dialog:MatDialog,) { }

  ngOnInit(): void {
   this.getproduct()
  }

 

  openDialog() {
    this.dialog.open(AddproductComponent, {
      width:'30%'
    })
  }

  
 
  editProduct(element:any){
    this.dialog.open(AddproductComponent,{
      width:'30%',
      data:element
    })
   
   }
  

 

getproduct(){
  this.product.getProduct()
  .subscribe({
    next:(res)=>{
      this.dataSource= res
    },
    error:(res)=>{
      alert("error while fetching")
    }
  })
}

deleteProduct(id:number){
  this.product.deleteProduct(id)
  .subscribe({
    next:(res)=>{
      alert("deleted succesfull")
      this.router.navigateByUrl("/home")
    },
    error:()=>{
      alert("error while deleting")
    }
  })

}
logout(){
  this.product.clear()
  this.router.navigateByUrl("/login")
}





}
