import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  /*linkActive: string = ""; 

  ngAfterViewInit(): void {
    this.activedLink('home');
  }

  activedLink(nameLink: string){
    this.linkActive = nameLink;
  }*/

  moonIcon:IconDefinition = faMoon;
  sunIcon:IconDefinition = faSun;
  savedTheme: string | null = localStorage.getItem('header__theme__icon__portifolio__blog__joca') || "moon";
  iconActual: string = "";
  templateTheme: IconDefinition = (localStorage.getItem('header__theme__icon__portifolio__blog__joca') === "sun") ? this.sunIcon : (localStorage.getItem('header__theme__icon__portifolio__blog__joca') === "moon") ? this.moonIcon : (localStorage.getItem('header__theme__icon__portifolio__blog__joca') === "null") ? this.moonIcon : this.moonIcon;

  ngOnInit(){
    this.iconActual = (localStorage.getItem('header__theme__icon__portifolio__blog__joca') === "sun") ? "sun" : (localStorage.getItem('header__theme__icon__portifolio__blog__joca') === "moon") ? "moon" : (localStorage.getItem('header__theme__icon__portifolio__blog__joca') === "null") ? "moon" : "moon";
  }


  changeTheme(){
    if(this.iconActual === "sun"){
      this.iconActual = "moon";
      this.templateTheme = this.moonIcon;
    }else if(this.iconActual === "moon"){
      this.iconActual = "sun";
      this.templateTheme = this.sunIcon;
    }
    this.saveTheme(this.iconActual);
    console.log(this.iconActual);
  }

  saveTheme(theme: string){
    if(localStorage.getItem('header__theme__icon__portifolio__blog__joca')){
      localStorage.removeItem('header__theme__icon__portifolio__blog__joca');
    }
    localStorage.setItem('header__theme__icon__portifolio__blog__joca', theme);
  }
}
