import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenuMobile: boolean = false;
  showMenuDesktop: boolean = false;

  openMenuMobile() {
    this.showMenuMobile = !this.showMenuMobile
  }

  openMenuDesktop() {
    this.showMenuDesktop = !this.showMenuDesktop
  }

  links = [
    {
      url: '#',
      name: 'Programação',
    },
    {
      url: '#',
      name: 'Front-End',
    },
    {
      url: '#',
      name: 'Infraestrutura',
    },
    {
      url: '#',
      name: 'Business',
    },
    {
      url: '#',
      name: 'Design & UX',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
