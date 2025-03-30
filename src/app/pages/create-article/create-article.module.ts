import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [CreateArticleComponent],
  exports: [CreateArticleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderModule
  ]
})
export class CreateArticleModule { }
