import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../../../models/message.model';
import { UserService } from '../../../../‏‏services/user/user.service';
import { MessageService } from '../../../../‏‏services/message/message.service';

@Component({
  selector: 'app-password-reset-link',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-reset-link.component.html',
  styleUrl: './password-reset-link.component.css'
})
export class PasswordResetLinkComponent {
  email: string = "";

  constructor(private _userService: UserService, private _messageService: MessageService) { }

  hadleClick = (): void => {
    console.log(this.email)
    console.log(`Sending password reset link to ${this.email}`)
    this._userService.passwordResetLink(this.email).subscribe({
      next: (response) => {
        this.sendEmailToResetPassword(response.token);
      },
      error: (err) => {
        console.error('mail error:', err);
        //why? server | mail incorrect
      }
    });
  }
  sendEmailToResetPassword(token: string): void {
    const newMessage: Message = {
      name: '[MagicalMoments]',
      fromEmail: 'info@magicalmoments-israel.com',
      toEmail: this.email,
      subject: 'Please reset your password',
      messageContent: `To reset your password, please visit this link: http://localhost:4200/password-reset/${token}`,
      isHTML: false,
      attachments: [],
      status: 'Sent'
    };
    this._messageService.sendEmail(newMessage).subscribe({
      next: (response) => {
        alert("Email sent successfully to reset password")
      },
      error: (err) => {
        console.error('mail error:', err);
        //why? server 
      }
    })
  }
}

