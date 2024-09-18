import { ObjectId } from 'mongodb';
import { Text} from './Text';
export class FAQs {
    id!:ObjectId
    question!:Text
    answer!:Text
    rating!:number
    createAt!:Date
}