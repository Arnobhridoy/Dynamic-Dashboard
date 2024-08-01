import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  submitted = false;

  todoForm: FormGroup = new FormGroup({
    id:  new FormControl(''),
    userId:  new FormControl(''),
    title: new FormControl(''),
    completed: new FormControl('')
  });

  constructor( 
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      // TODOS: add validation
      id: [''],
      userId: [''],
      titele: [''],
      completed: [''],
    });
  }

  onSubmit(): void {}
}
