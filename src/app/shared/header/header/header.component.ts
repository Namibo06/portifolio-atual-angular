import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  linkActive: string = ""; 

  ngAfterViewInit(): void {
    this.activedLink('home');
  }

  activedLink(nameLink: string){
    this.linkActive = nameLink;
  }
}
