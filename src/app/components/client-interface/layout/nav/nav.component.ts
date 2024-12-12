import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
import { TranslocoDirective } from '@jsverse/transloco';
import { CategoryService } from '../../../../‏‏services/category/category.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, LanguageSwitcherComponent, TranslocoDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
constructor(public _categoryService: CategoryService, private router:Router){}

ngOnInit(): void{
  if(this._categoryService.topCategories.length == 0){
    this._categoryService.getTopCategories();
  }
}
replace(name:any):string{
  return name.replace(/ /g, "-")
  }
}
