import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
import { FormsModule } from '@angular/forms';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskService } from './services/task.service'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksListComponent,
    TasksFormComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
