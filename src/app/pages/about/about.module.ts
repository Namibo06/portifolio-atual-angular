import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HeaderModule } from '../../shared/header/header.module';
import { AboutMeModule } from '../../components/about-me/about-me.module';



@NgModule({
  declarations: [AboutComponent],
  exports: [AboutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AboutMeModule
  ]
})
export class AboutModule { }
