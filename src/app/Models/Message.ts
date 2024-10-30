import { ObjectId } from 'mongodb';

export class Message {
    name!:string
    toEmail!:string
    fromEmail!:string
    subject?:string
    messageContent?:string
    status!:string
    attachments?:string[]
}