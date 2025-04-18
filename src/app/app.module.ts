import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { ProjectModule } from './pages/project/project.module';
import { FaqModule } from './pages/faq/faq.module';
import { HeaderModule } from './shared/header/header.module';
import { CardTemplateModule } from './components/card-template/card-template.module';
import { CardTiktokTemplateModule } from './components/card-tiktok-template/card-tiktok-template.module';
import { AboutMeModule } from './components/about-me/about-me.module';
import { RelevantArticlesModule } from './components/relevant-articles/relevant-articles.module';
import { ArticleModule } from './pages/article/article.module';
import { CreateArticleModule } from './pages/create-article/create-article.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuModule } from './components/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ProjectModule,
    FaqModule,
    HeaderModule,
    CardTemplateModule,
    CardTiktokTemplateModule,
    AboutMeModule,
    RelevantArticlesModule,
    ArticleModule,
    CreateArticleModule,
    FontAwesomeModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
