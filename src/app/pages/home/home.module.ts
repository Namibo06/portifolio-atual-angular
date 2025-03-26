import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../shared/header/header.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardTemplateModule } from '../../components/card-template/card-template.module';



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    RouterModule,
    CardTemplateModule
  ]
})
export class HomeModule { }
