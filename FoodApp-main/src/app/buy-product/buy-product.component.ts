import { group } from '@angular/animations';
import { ResourceLoader } from '@angular/compiler';
import { Component,Inject, Input, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatError } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { arrow } from '@popperjs/core';
import { payment, product } from '../datatype';
import { HeaderComponent } from '../header/header.component';
import { PaymentService } from '../service/payment.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent {

  buyProductForm!:FormGroup
  productData: any
 

  
  constructor(private service:ProductService,private formBuilder:FormBuilder,private dialogRef:MatDialogRef<BuyProductComponent>, private router:Router,@Inject(MAT_DIALOG_DATA) public pr:any){}

   
  
    
  ngOnInit():void{
    
    
    this.buyProductForm = this.formBuilder.group({
      cardName:['',Validators.required],
      cardNumber:['',Validators.required],
      expiry:['',Validators.required],
      cvv:['',Validators.required],
      date:[new Date()],
      address:['', Validators.required],
     
      price:'',
      hotelName:'',
      foodName:''
        
  
     

    })
    if(this.pr){
      this.buyProductForm.controls['price'].setValue(this.pr.price)
      this.buyProductForm.controls['hotelName'].setValue(this.pr.hotelName)
      this.buyProductForm.controls['foodName'].setValue(this.pr.foodName)
    }
    
  
}






  buyProduct() {
  this.service.buyProduct(this.buyProductForm.value)
  .subscribe({
    next:(res)=>{
      alert("order successfully")
      this.buyProductForm.reset()
      this.dialogRef.close()
      
      this.router.navigateByUrl('orderDetails')
    }
  })
}

}

