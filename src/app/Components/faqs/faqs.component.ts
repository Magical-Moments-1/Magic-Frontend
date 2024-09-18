import { Component ,ElementRef,OnInit, ViewChild  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaqsService } from '../../Services/FAQs/faqs.service';
import { FAQs } from '../../Models/FAQs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FAQsComponent  {
 public questions: FAQs[]=[]
 public filteredQuestions: FAQs[]=[]
 @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  constructor (private _questionService: FaqsService) { 
  }
  ngOnInit(): void {
      this._questionService.getQuestionList().subscribe({
        next: (res) => {
          console.log(res);
          this.questions = res; 
          this.filteredQuestions = res; 
        },
        error: (err) => {
          console.log(err);
        }
      })
    } 
    ngAfterViewInit(): void {
      if (this.searchInput && this.searchInput.nativeElement) {
        fromEvent(this.searchInput.nativeElement, 'input')
          .pipe(
            debounceTime(300), // הוספת debounceTime ל-300 מילישניות
            map((event: Event) => (event.target as HTMLInputElement).value),
            startWith('') // התחלה עם מחרוזת ריקה
          )
          .subscribe(searchTerm => this.performSearch(searchTerm));
      }
    }
  
    performSearch(searchTerm: string): void {
      console.log('Search Term:', searchTerm);
      
      if (!searchTerm.trim()) {
        console.log('Resetting to all questions');
        this.filteredQuestions = [...this.questions]; // Reset to all questions if input is empty
      } else {
        console.log('Filtering questions');
        this.filteredQuestions = this.questions.filter(question =>
          question.question.hebrew.toLowerCase().includes(searchTerm.toLowerCase()) ||
          question.question.english.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    
      console.log('Filtered Questions:', this.filteredQuestions);
    }
    
    
}
