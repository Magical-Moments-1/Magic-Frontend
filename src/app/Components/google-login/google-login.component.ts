import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var google: any;

@Component({
  selector: 'app-google-login',
  standalone: true,
  imports: [],
  templateUrl: './google-login.component.html',
  styleUrl: './google-login.component.css'
})
export class GoogleLoginComponent implements OnInit{
  user: any = null;  // נשמור כאן את פרטי המשתמש
  defaultProfileImage = 'https://lh3.googleusercontent.com/a/default-user=s80-p-k-rw-no'; // תמונת אנונימי

  // constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // יצירת תצורה של Google Sign-In
    google.accounts.id.initialize({
      client_id: '577889101296-a6ijqo02rmo518m9uasgv2hql9lric4e.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this),
    });

    // הצגת כפתור הכניסה
    google.accounts.id.renderButton(
      console.log("kdkf"),

      document.getElementById("buttonDiv"),
      { theme: "outline", size: "medium" }  // תצורה של הכפתור
    );
  }

  // פונקציה שתופעל בעת קבלת תוקף (token)


 
  handleCredentialResponse(response: any) {
    const token = response.credential;
    console.log("Encoded JWT ID token: " + token);
    
  //   // שולחים את ה-token לשרת
  //   this.http.post('https://localhost:7154/', { token: token })
  //     .subscribe(
  //       (res: any) => {
  //         console.log('User authenticated successfully:', res);
  //         // שומרים את פרטי המשתמש
  //         this.user = res;
  //       },
  //       (error) => {
  //         console.error('Authentication failed:', error);
  //       }
  //     );
  }
  getProfileImage(): string {
    // אם יש תמונה של המשתמש, נציג אותה; אחרת נציג את תמונת ברירת המחדל
    return this.user && this.user.picture ? this.user.picture : this.defaultProfileImage;
  }
}