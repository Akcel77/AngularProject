import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Response } from 'src/app/models/response';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = [];
  productSub: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productSub = this.productsService.getProducts().subscribe(
      (response : Response) => {

        console.log(response);
        this.products = response.result;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
