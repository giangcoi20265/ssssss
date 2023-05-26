import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { HeroService } from 'src/app/service/hero.service';
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent {
  product!:IProduct
  productForm = this.formBuilder.group({
    name:[''],
    price:0
  })
    constructor(private heloSevice: HeroService,
      private router:ActivatedRoute,
      private formBuilder : FormBuilder
      ){
        this.router.paramMap.subscribe(params=>{
          const id=params.get('id');
          this.heloSevice.getProduct(id).subscribe(product=>{
            console.log(product)
            this.product=product;
            this.productForm.patchValue({
              name: product.name,
              price: product.price
            })
          })
        })
      }
    onHanldUpdate(){
      if(this.productForm.valid){
        const product:any={
          id: this.product.id,
          name: this.productForm.value .name || "",
          price: this.productForm.value .price || 0
        }
        this.heloSevice.updateProduct(product).subscribe((data)=>{
          console.log(data)
        })
      }
    }  
}
