package com.rodolfo.springwithangular.service;

import com.rodolfo.springwithangular.model.Todo;
import com.rodolfo.springwithangular.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.function.Supplier;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    public Todo create(Todo todo) {
        todo.setDtCadastro(LocalDate.now());
        return todoRepository.save(todo);
    }

    public void delete(long id) {
        todoRepository.deleteById(id);
    }

    public void finalizar(long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo não localizado"));
        todo.setDtConclusao(LocalDate.now());
        todoRepository.save(todo);
    }

}
