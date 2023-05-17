import { Book } from "src/interfaces/books/book.interface";

export class CreateBookDto implements Book {
    title: string
    author: string
    page_count: number
}