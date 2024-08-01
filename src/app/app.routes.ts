import { Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'charts', component: ChartComponent},
    {path: 'add', component: AddTodoComponent}
];
