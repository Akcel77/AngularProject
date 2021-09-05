import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-or-edit-product-modal',
  templateUrl: './add-or-edit-product-modal.component.html',
  styleUrls: ['./add-or-edit-product-modal.component.css']
})
export class AddOrEditProductModalComponent implements OnInit, OnDestroy{


  @Input() product!: Product;
  @Output() finish = new EventEmitter();
  productForm: FormGroup;
  categories : Category[] = [];
  categorySub! : Subscription;
  idCategory = 1;


  constructor(private fb : FormBuilder, private categoriesService: CategoriesService) {
    this.productForm = this.fb.group({
      productInfos : fb.group({
        name : ['',Validators.required],
        description : ['',Validators.required],
        price : ['',Validators.required],
        stock : ['',Validators.required]
      }),
      illustration : fb.group({
        image : ['',Validators.required],
      })
    });
  }

  selectCategory(id: number) {
    this.idCategory = id;
  }

  ngOnInit(): void {
    this.categorySub = this.categoriesService.getCategories().subscribe(
     (response) => {
      this.categories = response.result;
      console.log("FORM" + this.productForm.get('productInfos').value);
     },
     (error) => {
       console.log(error);
     },
     () => {
       console.log('categories loaded');
     }
    );
  }


  //Verifier le type peut etre null (validator)
  // get isProductInfosInvalid(): boolean {
  //    return this.productForm.get('productInfos').invalid;
  // }

  // get isIllustrationInvalid(): boolean {
  //   return this.productForm.get('illustration').invalid;
  // }

  handelCancel(): void {
    this.finish.emit();
    this.close();
  }


  // handleFinish(): void {
  //   const product ={
  //     ...this.productForm.get('productInfos').value,
  //     ...this.productForm.get('illustration').value,

  //   }
  // }

  close(): void {
    this.productForm.reset();
    this.idCategory = 1;
  }

  ngOnDestroy(): void {
    this.categorySub.unsubscribe();
  }

}
