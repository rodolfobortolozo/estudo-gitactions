import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/model/Todo.model';
import { CompAngularMaterialModule } from '../../shared/modules/comp-angular-material/comp-angular-material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CompAngularMaterialModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

  todos: Todo[] = []
  form!: FormGroup;
  displayedColumns: string[] = ['titulo', 'descricao', 'dtCadastro', 'dtFinalizado', 'acao'];
 
  constructor(private todoService: TodoService,
              private formBuilder: FormBuilder
  ){
    
  }
  ngOnInit(): void {

    this.carregarLista();

    this.form = this.formBuilder.group({
      id: [null],
      titulo:[''],
      descricao:[''],
      dtCadastro:[''],
      dtConclusao: [null]
    })

    
  }

  carregarLista(){
    this.todoService.getAll().subscribe({
      next: (res)=> {
        console.log(res);
        this.todos = res;
      }
    });
  }

  salvar(){
    this.todoService.create(this.form.value).subscribe({
      next: ()=> {
        alert("Cadastrado");
        this.form.reset();
        this.carregarLista();
      }
    })
  }


  delete(id: number){
    this.todoService.delete(id).subscribe({
      next: ()=> {
        alert("Deletado");
        this.carregarLista();
      }
    })
  }

  finalizar(id: number){
    this.todoService.finalizar(id).subscribe({
      next: () =>{
        alert("Finalizado");
        this.carregarLista();
      }
    })
  }


}
