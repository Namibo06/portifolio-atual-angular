import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ProjectComponent } from './pages/project/project/project.component';
import { FaqComponent } from './pages/faq/faq/faq.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ArticleComponent } from './pages/article/article/article.component';
import { CreateArticleComponent } from './pages/create-article/create-article/create-article.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projetos',
    component: ProjectComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'sobre',
    component: AboutComponent
  },
  {
    path: 'artigo/:id',
    component: ArticleComponent
  },
  {
    path: 'projeto/:id',
    component: ArticleComponent //ProjectSingle
  },
  {
    path: 'criar-artigo',
    component: CreateArticleComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
