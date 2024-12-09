export interface Message {
    name?: string
    fromEmail?: string
    toEmail?: string
    subject?: string
    messageContent?: string
    isHTML?: boolean
    attachments?: string[]
    status?: string
    createdAt?: string

}