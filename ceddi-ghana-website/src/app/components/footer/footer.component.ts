import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  date: Date = new Date();
  getPath(){
    return this.router.url;
  }

  test : Date = new Date();

  constructor(private router: Router) {
  }
}
