import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../‏‏services/product/product.service';
import { Product } from '../../../../models/product.model';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }
  prodID?: any
  product!: Product
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.prodID = params.get('id');
      }
    });
    if (this.prodID !== null) {
      this._productService.getProductById(this.prodID).subscribe({
        next: (response) => {
          this.product = response;
        },
        error: (err) => {
          console.error(' error:', err);
          //why? - id in correct
          //- server error connection
        }
    })

  }
  }
}
