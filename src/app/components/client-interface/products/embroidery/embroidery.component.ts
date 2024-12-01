import { EmbroideryService } from '../../../../Services/embroidery/embroidery.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-embroidery',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './embroidery.component.html',
  styleUrl: './embroidery.component.css'
})
export class EmbroideryComponent implements OnInit {
  constructor(public _embroidery: EmbroideryService) { }
  currentPrice: number = 0
  amountOfLetters: number = 0
  isIcon: boolean = false

  ngOnInit() {
    if (this._embroidery.embroideryList.length == 0) {
      this._embroidery.getEmbroideryList().subscribe(data => {
        this._embroidery.embroideryList = data
        console.log("data:", data);
      })
    }
  }
  
  icon(event: Event) {
    this.isIcon = !this.isIcon;
    event.preventDefault()
    console.log(event);
  }

  embroideryForm: FormGroup = new FormGroup({
    text: new FormControl("", [Validators.required]),
    font: new FormControl("", [Validators.required]),
    icon: new FormControl(null, []),
    place: new FormControl("", [Validators.required]),
    dplace: new FormControl(null, []),
    size: new FormControl(0, [Validators.required]),
    color: new FormControl("1", [Validators.required]),
    price: new FormControl(20, [])
  })
  calc() {
    this.amountOfLetters = 0;
    const letters = this.embroideryForm.value.text.split(/[ .]/);
    for (let i = 0; i < letters.length; i++) 
      for (let j = 0; j < letters[i].length; j++) 
        this.amountOfLetters++
    const priceForLetter = this._embroidery.embroideryList[0].size[this.embroideryForm.value.size].price
    this.currentPrice = (this.amountOfLetters) * priceForLetter
    if (this.currentPrice > 20)
      this.embroideryForm.patchValue({ price: this.currentPrice });
  }

  color(color: any) {
    this.embroideryForm.patchValue({ color: color });
    console.log(this.embroideryForm.value);
  }
  
  iconimg(icon: any) {
    this.embroideryForm.value.icon = icon
  }

  handleSave() {
    console.log(this.embroideryForm.value);

  }
}







