import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  linkActive: string = "";

  constructor(private router: Router) {} 

  ngOnInit(): void {
    this.activedLink('home');
  }

  activedLink(nameLink: string){
    this.linkActive = nameLink;

  }
}
