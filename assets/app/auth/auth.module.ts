import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
import { AuthRoutes } from './auth.routes';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [CommonModule, ReactiveFormsModule, AuthRoutes],
    providers: []
})

export class AuthModule {

}