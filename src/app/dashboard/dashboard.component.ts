import { Component } from '@angular/core';
import { Todo } from '../common/models/todo.model';
import { TodoService } from '../service/todo.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  todoData: Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (response: Todo[]) => {
        this.todoData = response;
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
}
