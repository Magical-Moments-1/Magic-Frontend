import { Component, NgModule } from '@angular/core';
import { MessageService } from '../../../Services/Message/message.service';
import { Message } from '../../../Models/Message';
import { ContactUsComponent } from '../../User/contact-us/contact-us.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from '../../../Models/Status';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [ContactUsComponent, ReactiveFormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})

export class EmailComponent {
  emailsNotCompletes: any[] = [];
  emailsCompletes: any[] = [];
  selectedEmail: any;
  public replyMessageForm!: FormGroup
  flag: boolean = false;
  flag2: boolean = false;

  constructor(private _messageService: MessageService) { }

  ngOnInit(): void {
    this.replyMessageForm = new FormGroup({
      "subject": new FormControl("", [Validators.required]),
      "message": new FormControl("", [Validators.required]),
    })
  }

  loadEmailsForManager(): void {
    this._messageService.getAllEmails().subscribe({
      next: (res) => {
        this.emailsNotCompletes = res.filter((email: any) => email.status == "Pending");
        this.emailsCompletes = res.filter((email: any) => email.status != "Pending" && email.toEmail == "magicalmoments.office@gmail.com");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  replyToEmail(): void {
    debugger
    debugger;
    const emailRegex: RegExp = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
    const matchedEmail: string = this.selectedEmail.messageContent.match(emailRegex)?.[0] || "";

    let name = this.selectedEmail.name
    let fromEmail = "info@magicalmoments-israel.com"
    let toEmail = matchedEmail
    let subject = this.replyMessageForm.value.subject
    let message = this.replyMessageForm.value.message

    this._messageService.NewMessage = {
      name: "Magical Moments",
      fromEmail: fromEmail,
      toEmail: toEmail,
      subject: subject,
      messageContent: message,
      status: "send from manager",
      attachments: []
    };

    const newS = new Status();

    this._messageService.sendEmail(this._messageService.NewMessage).subscribe({
      next: (res) => {
        debugger
        console.log(res);
        newS.status = "COMPLETE BY " + res.id;
        this._messageService.updateStatus(this.selectedEmail.id, newS).subscribe({
          next: (res) => {
            this.flag = false;
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          }
        })
        this.replyMessageForm.reset();
        alert("Message Sent Successfully")
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  selectEmail(email: any): void {
    debugger
    console.log(email);
    this.selectedEmail = email;
    this.flag = true;
  }
  getEmailFromManger(email: any): void {
    debugger
    console.log(email);
    this._messageService.getEmailByID(email.status.substring(email.status.lastIndexOf(' ') + 1)).subscribe({
      next: (res) => {
        this.selectedEmail = res;
        this.flag2 = true;
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.flag2 = true;
  }
  close(): void {
    this.flag = false;
    this.flag2 = false;
  }
}
