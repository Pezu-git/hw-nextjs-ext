import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.servise";

@Module({
    exports: [BooksService],
    controllers: [BooksController],
    providers: [BooksService]
})
export class BooksModule { }