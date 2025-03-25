import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  stepActive: string = "";

  ngOnInit(): void {
    this.activeStep('all');
  }

  activeStep(step: string){
    this.stepActive = step;
  }
}
