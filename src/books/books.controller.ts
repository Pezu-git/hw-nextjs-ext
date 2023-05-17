
import { BooksService } from './books.servise';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { CreateBookDto } from 'src/Dto/Books/createBook.dto';
import { Book } from 'src/interfaces/books/book.interface';


@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Get()
    findAll(): Promise<Book[]> {
        return new Promise<Book[]>((resolve, reject) => {
            resolve(this.booksService.findAll());
        })
    }

    @Get(':title')
    getBook(@Param('title') title: string) {
        return this.booksService.getBook(title)
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        this.booksService.create(createBookDto)
    }

    @Delete(':title')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('title') title: string) {
        this.booksService.remove(title)
    }

}

