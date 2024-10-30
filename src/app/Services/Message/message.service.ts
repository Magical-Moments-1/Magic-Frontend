import { Injectable } from '@angular/core';
import { Message } from '../../Models/Message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../../Models/Status';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private _url: string = "https://localhost:7154/api/Message"
  public messageListt: Message[] = []
  public messageListToMangaerSEND: Message[] = []
  public messageListToUserCOMPLETE: Message[] = []
  private newMessage: Message = new Message()
  get NewMessage(): Message {
    return this.newMessage
  }
  set NewMessage(value: Message) {
    this.newMessage = value
  }
  constructor(public _http: HttpClient) { }

  sendEmail(sendEmail: Message): Observable<any> {
    return this._http.post<any>(`${this._url}/send`, sendEmail)
  }

  updateStatus(emailId: string, status: Status): Observable<any> {
    debugger
    return this._http.put(`${this._url}/status/${emailId}`, status);
  }

  getAllEmails(): Observable<any[]> {
    return this._http.get<any[]>(this._url);
  }

  getEmailByID(emailId: string): Observable<any> {
    return this._http.get<any>(`${this._url}/${emailId}`);
  }
}

