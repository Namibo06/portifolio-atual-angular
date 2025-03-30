import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  imports: [
    CommonModule,
    HeaderModule,
  ]
})
export class ArticleModule { }
