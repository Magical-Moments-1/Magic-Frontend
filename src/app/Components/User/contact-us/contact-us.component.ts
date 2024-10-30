import { Component } from '@angular/core';
import { MessageService } from '../../../Services/Message/message.service';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  flag: boolean = false;
  public messageForm!: FormGroup


  constructor(private _messageService: MessageService) { }
  ngOnInit(): void {
    this.messageForm = new FormGroup({
      "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "email": new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]),
      "message": new FormControl("", [Validators.required]),
    })
  }
  onSubmit() {

    let name = this.messageForm.value.name
    let fromEmail = "info@magicalmoments-israel.com"
    let toEmail = "magicalmoments.office@gmail.com"
    let subject = "Contact Us"
    let message = this.messageForm.value.message + "this email send to you from: *" + this.messageForm.value.email

    this._messageService.NewMessage = {
      name: name,
      fromEmail: fromEmail,
      toEmail: toEmail,
      subject: subject,
      messageContent: message,
      status: "Pending",
      attachments: []
    };

    this._messageService.sendEmail(this._messageService.NewMessage).subscribe({
      next: (res) => {
        this.messageForm.reset();
        alert("Message Sent Successfully")  
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
};
