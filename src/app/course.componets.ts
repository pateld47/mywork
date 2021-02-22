
import {  Component } from '@angular/core';
import {CourseService} from './course.service';

@Component({
                selector: 'courses',
                template: `
                            
                            <h1>{{title | uppercase}}</h1> 

                            {{ text | summary }} <br> <br>

                            TITLE: {{courses.title | lowercase  | uppercase }}<br><br><br>
                            RATING: {{courses.rating | number : '1.1-1'}}<br><br><br>
                            STUDENT: {{courses.student | number }}<br><br><br>
                            PRICE: {{courses.price | currency : 'EUR'}}<br><br><br>
                            RELEASEDATE:{{courses.releaseDate | date : 'fullDate'}}<br><br><br>


                            
                       

                `
})

export class CoursesComponets {


    
    title= 'Me taking beautiful Picture on my Phone';

   

    
    
    
    text= ` This specification does not indicate the behavior, rendering or 
    otherwise, of space characters other than those explicitly identified here 
    as white space characters. For this reason, authors should use appropriate 
    elements and styles to achieve visual formatting effects that involve white space, 
    rather than space characters.
                `


    courses = {
                    title:'The Angular Course',
                    rating:4.89825,
                    student:1515151,
                    price:253.69,
                    releaseDate: new Date ( 2021, 0, 19)
    };

    
   

}

 