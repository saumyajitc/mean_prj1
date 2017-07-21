import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { 
        this.myForm = new FormGroup({
            email: new FormControl(null, [ 
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
            ]),
            password: new FormControl(null, Validators.required),
        })
    }

    submitForm() {
        let user: User = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signIn(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/')
''                },
                error => { 
                    console.log(error)
                }
            )
        this.myForm.reset();
    }
}