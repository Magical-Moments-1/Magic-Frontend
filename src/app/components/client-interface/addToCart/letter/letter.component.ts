import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from "ngx-editor";

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [NgxEditorModule, FormsModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {

  editor!: Editor
  html: string = "<p>Hello World!</p>";
  toolbar: Toolbar = [
    ["undo", "redo"],
    ["bold", "italic"],
    ["underline"],
    // ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    // ["link", "image"],
    // ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"],
    ['horizontal_rule', 'format_clear', 'indent', 'outdent'],


  ];
  // // colorPresets = ["red", "#FF0000", "rgb(255, 0, 0)"];

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // // // make sure to destory the editor
  // ngOnDestroy(): void {
  //   this.editor.destroy();
  // }
  saveLetter(){
    console.log(this.html);
  }
}
