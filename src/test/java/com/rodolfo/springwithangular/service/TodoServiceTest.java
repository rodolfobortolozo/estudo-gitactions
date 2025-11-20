package com.rodolfo.springwithangular.service;

import com.rodolfo.springwithangular.model.Todo;
import com.rodolfo.springwithangular.repository.TodoRepository;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TodoServiceTest {

    @InjectMocks
    private TodoService todoService;

    @Mock
    private TodoRepository todoRepository;

    @Test
    void findAll() {
        when(todoRepository.findAll()).thenReturn(new ArrayList<>());

        List<Todo> todos = todoService.findAll();

        assertNotNull(todos);
        verify(todoRepository, times(1)).findAll();
    }

    @Test
    void delete(){
        todoService.delete(1L);
        verify(todoRepository, times(1)).deleteById(anyLong());
    }

    @Test
    void create(){
        when(todoRepository.save(any(Todo.class))).thenReturn(new Todo());
        Todo todo = todoService.create(new Todo());

        verify(todoRepository, times(1)).save(any(Todo.class));
        assertNotNull(todo);
    }

    @Test
    void finalizar(){
        Todo todo = new Todo();
        when(todoRepository.findById(anyLong())).thenReturn(Optional.of(todo));
        when(todoRepository.save(any(Todo.class))).thenReturn(todo);

        todoService.finalizar(1L);

        verify(todoRepository, times(1)).findById(anyLong());
        verify(todoRepository, times(1)).save(any(Todo.class));
        assertEquals(todo.getDtConclusao(), LocalDate.now());
    }

    @Test
    void finalizarWithException(){

        assertThrows(RuntimeException.class,
                () -> todoService.finalizar(1L),
                "Todo não localizado"
        );

    }

}