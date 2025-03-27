import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { HeaderModule } from '../../shared/header/header.module';
import { AboutMeModule } from '../../components/about-me/about-me.module';
import { CardTemplateModule } from '../../components/card-template/card-template.module';



@NgModule({
  declarations: [ProjectComponent],
  exports: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderModule,
    AboutMeModule,
    CardTemplateModule
  ]
})
export class ProjectModule { }
