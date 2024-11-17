import { Component, input, Input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { Router } from '@angular/router';
import { CurrencyPipe } from '../../../../pipes/currency.pipe';

@Component({
  selector: 'app-product-in-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-in-list.component.html',
  styleUrl: './product-in-list.component.css'
})
export class ProductInListComponent {
@Input() product = new Product();
currency:string = "USD";
constructor(private router: Router){}
productClick =()=>{
this.router.navigateByUrl(`/product/${this.product.id}`)   
}
}
