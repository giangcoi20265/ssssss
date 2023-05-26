import { Component } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/products';

@Component({
  selector: 'app-produc-add',
  templateUrl: './produc-add.component.html',
  styleUrls: ['./produc-add.component.scss']
})
export class ProducAddComponent {
  // product ={
  //   name:'',
  //   price:0,
  //   image:'ảnh'
  // };
  // constructor(private heloService :HeroService){

  // }
  // onHanldAdd(){
  //   this.heloService.addProduct(this.product).subscribe((data)=>{
  //     console.log(data)
  //   },error=>console.log(error.message))
  // }
constructor(private formBuilder:FormBuilder , private heloService : HeroService){
 
}
productForm= this.formBuilder.group({
  name:['',[Validators.required]],
  price:[0]
})

  oHandleSubmit(){
    if(this.productForm.valid){
    const product:any={
      name : this.productForm.value. name || "",
      price :this.productForm.value.price || 0,
   
    }
    this.heloService.addProduct(product).subscribe((data)=>{
      console.log(data)
    })
    }
  }

}