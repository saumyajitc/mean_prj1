import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
    myForm: FormGroup;

    constructor() { }

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
        console.log(this.myForm);
        this.myForm.reset();
    }
}