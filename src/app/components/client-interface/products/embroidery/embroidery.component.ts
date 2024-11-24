import { Component } from '@angular/core';
import { EmbroideryService } from '../../../../Services/embroidery/embroidery.service';

@Component({
  selector: 'app-embroidery',
  standalone: true,
  imports: [],
  templateUrl: './embroidery.component.html',
  styleUrl: './embroidery.component.css'
})
export class EmbroideryComponent {
  isIcon:boolean=false 
 constructor(public _embroidery: EmbroideryService) { }
 ngOnInit() {
  debugger
  if(this._embroidery.embroideryList.length==0){
    this._embroidery.getEmbroideryList().subscribe(data => {this._embroidery.embroideryList=data
      console.log("data:",data);
      
    })

  }
    }
  ;
  icon(event:Event) {
    this.isIcon = !this.isIcon;
    event.preventDefault()
    console.log(event);
    
  }
  
}
