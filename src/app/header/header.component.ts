import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
