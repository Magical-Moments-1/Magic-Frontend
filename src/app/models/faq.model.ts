
import { Text } from './text.model';
export interface FAQ {
    id: string
    question: Text
    answer: Text
    rating: number
    createAt: Date
}