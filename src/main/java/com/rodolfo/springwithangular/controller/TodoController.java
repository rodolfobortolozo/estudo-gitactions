package com.rodolfo.springwithangular.controller;

import com.rodolfo.springwithangular.model.Todo;
import com.rodolfo.springwithangular.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping
    public List<Todo> list() {
        return todoService.findAll();
    }

    @PostMapping
    public Todo create(@RequestBody Todo todo) {
        return todoService.create(todo);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        todoService.delete(id);
    }

    @PostMapping("finalizar/{id}")
    public void finalizar(@PathVariable Long id) {
        todoService.finalizar(id);
    }

}
