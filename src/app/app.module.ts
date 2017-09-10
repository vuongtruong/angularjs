import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { ServiceService } from './services/service.service';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';

const appRoutes : Routes = [
	{path:'', component: UserComponent},
	{path:'about', component:AboutComponent},
	{path:'news', component:NewsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
