import { Injectable, Scope } from "@nestjs/common";
import { Book } from "src/interfaces/books/book.interface";

@Injectable({
    scope: Scope.TRANSIENT
})

export class BooksService {

    private readonly books: Book[] = [];

    create(book: Book) {
        this.books.push(book);
    }

    findAll(): Book[] {
        return this.books
    }

    getBook(title: string) {
        const book = this.books.find(book => book.title === title);

        return book
    }

    remove(title: string) {
        this.books.forEach((book, index) => {
            if (book.title === title) {
                this.books.splice(index, 1)
                return
            }
        })
    }
}