import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course-from',
  templateUrl: './new-course-from.component.html',
  styleUrls: ['./new-course-from.component.css']
})
export class NewCourseFromComponent {

              form= new FormGroup({
                                topics: new FormArray([])
              })


              addList(topic : HTMLInputElement){

                 ( this.form.get('topics') as FormArray).push(new FormControl(topic.value))
                
                topic.value= "";
                }

 
}
