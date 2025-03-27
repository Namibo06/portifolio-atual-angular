import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../shared/header/header.module';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { RelevantArticlesModule } from '../../components/relevant-articles/relevant-articles.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FaqComponent],
  exports: [FaqComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    RelevantArticlesModule,
    FormsModule
  ]
})
export class FaqModule { }
