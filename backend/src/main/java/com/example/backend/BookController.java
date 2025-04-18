package com.example.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @GetMapping
    public List<Book> findAll() {

        System.out.println("findAll() called");
        return List.of(new Book(1L, "The Great Gatsby"), new Book(2L, "To Kill a Mockingbird"),
                new Book(3L, "1984"), new Book(4L, "Pride and Prejudice"),
                new Book(5L, "The Catcher in the Rye"), new Book(6L, "The Lord of the Rings"),
                new Book(7L, "The Hobbit"), new Book(8L, "Fahrenheit 451"),
                new Book(9L, "Brave New World"), new Book(10L, "The Grapes of Wrath"));
    }

    @GetMapping("/{id}")
    public Book findById(@RequestParam Long id) {
        System.out.println("findById() called with id: " + id);
        return new Book(id, "Book Title");
    }

}
