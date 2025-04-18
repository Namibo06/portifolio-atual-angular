import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../shared/header/header.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardTemplateModule } from '../../components/card-template/card-template.module';
import { CardTiktokTemplateModule } from '../../components/card-tiktok-template/card-tiktok-template.module';
import { MenuModule } from '../../components/menu/menu.module';



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    RouterModule,
    CardTemplateModule,
    CardTiktokTemplateModule,
    MenuModule
  ]
})
export class HomeModule { }
