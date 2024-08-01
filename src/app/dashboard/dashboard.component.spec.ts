import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TodoService } from '../service/todo.service';
import { HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BehaviorSubject, Observable, Subject, of, throwError } from 'rxjs';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let todoServiceSpy: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        HttpClientTestingModule,
        HttpClientModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTodos on initialization', () => {
    spyOn(component, 'getTodos');
    component.ngOnInit();
    expect(component.getTodos).toHaveBeenCalled();
  });
});
