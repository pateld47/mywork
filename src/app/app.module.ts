import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponets} from './course.componets';
import { CourseService } from './course.service';
import { SummaryPipe } from './summary.pipe';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { NewCourseFromComponent } from './new-course-from/new-course-from.component';






@NgModule({
  declarations: [
    AppComponent,
    CoursesComponets,
    SummaryPipe,
    SingupFormComponent,
    NewCourseFromComponent,
    
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [CourseService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
