import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isChartsActive = false;
  isHomeActive = false;
  isAddActive = false;
  constructor( private router: Router){}
  ngOnInit() {
    const path = this.getPathname();
    this.setActiveBar(path);
  }

  getPathname() : string {
    return window.location.pathname.split('/')[1];
  }

  setActiveBar(value: string) {
    this.isChartsActive = false;
    this.isHomeActive = false;
    this.isAddActive = false;

    if (value === 'charts') {
      this.isChartsActive = true;
    } else if (value === ''){
      this.isHomeActive = true;
    } else {
      this.isAddActive = true ;
    }
  }

  routeTo(value: string): void {
    this.setActiveBar(value);
    this.router.navigate([value]);
    const element  = document.getElementById('navbar');
    element?.classList.remove('show')
  }
}
