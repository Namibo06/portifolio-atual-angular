import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTemplateComponent } from './card-template/card-template.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [CardTemplateComponent],
  exports: [CardTemplateComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class CardTemplateModule { }
