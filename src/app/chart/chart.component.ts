import { Component, HostListener } from '@angular/core';
import { Todo } from '../common/models/todo.model';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule, CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  todoData: Todo[] = []
  data: any;
  total = 0;
  finished = 0;
  options: any;
  dataSet: Array<Number> = [];

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    
    if (event.type === 'resize') {
      console.log()
      this.router.navigate(['charts'])
    }
  }

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTodos();
    const test = [ 325, 702]

    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['Finished', 'Unfinished '],
            datasets: [
                {
                    data: this.dataSet,
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }

  



  getTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (response: Todo[]) => {
        this.todoData = response;
        for (let i = 0; i < response.length; i++) {
          this.total++;
          if (response[i].completed) {
            this.finished++;
          }
        }
        this.dataSet.push(this.finished);
        this.dataSet.push(this.total- this.finished );
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
}
