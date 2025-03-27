import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTiktokTemplateComponent } from './card-tiktok-template/card-tiktok-template.component';



@NgModule({
  declarations: [CardTiktokTemplateComponent],
  exports: [CardTiktokTemplateComponent],
  imports: [
    CommonModule
  ]
})
export class CardTiktokTemplateModule { }
