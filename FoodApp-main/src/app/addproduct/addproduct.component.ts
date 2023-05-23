import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { product } from '../datatype';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  productForm!: FormGroup;
  //productData: any| product;
  btn:string='Add Food'

  constructor(
    private product:ProductService,
    private activeroute:ActivatedRoute,
    private route:Router,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private fb:FormBuilder,
    private dialogRef:MatDialogRef<AddproductComponent>
    ){
    
  }

   
 
 ngOnInit():void{
  this.productForm = this.fb.group({
    hotelName:'',
    price:'',
    url:'',
    foodDetail:'',
    foodName:'',
    category:'',
    
   
  })
  if(this.editData){
  this.btn = 'update'  
  this.productForm.controls['hotelName'].setValue(this.editData.hotelName)
  this.productForm.controls['price'].setValue(this.editData.price)
  this.productForm.controls['url'].setValue(this.editData.url)
  this.productForm.controls['foodDetail'].setValue(this.editData.foodDetail)
  this.productForm.controls['foodName'].setValue(this.editData.foodName)
  this.productForm.controls['category'].setValue(this.editData.category)
  } 


 }


 addProduct(){
  if(!this.editData){
    if(this.productForm.valid){
      this.product.addProduct(this.productForm.value)
      .subscribe((res)=>{
        alert("added succesfully")
      })
    }
  }else{
    this.updateFoodItem()
  }
 }

 updateFoodItem(){
  this.product.putProduct(this.productForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("product Updated")
      this.productForm.reset()
      this.dialogRef.close()
    },
    error:()=>{
      alert("error while updating")
    }
  })
 }
}
 



