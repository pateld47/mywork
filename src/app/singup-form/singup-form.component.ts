import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsernameValidator } from './username.validators';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent {

        form = new FormGroup({

                                account: new FormGroup({

                                  username: new FormControl('',[ Validators.required, Validators.minLength(5), UsernameValidator.cannotContainSpace],
                                                 UsernameValidator.shouldBeUnique),
                                  password: new FormControl()
                                })


        });

        get username(){
          return this.form.get('account.username');
        }

        login(){
                  this.form.setErrors({
                            invalidlogin : true
                  });
        }
    
    
  }
  
  // if ( !isValid )
  // let isValid= authService.login(this.form.value);