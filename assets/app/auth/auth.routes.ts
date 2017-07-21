import { Routes, RouterModule } from '@angular/router';

import { LogoutComponent } from './logout.component';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';

const AUTH_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'signup' },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent}
]

export const AuthRoutes = RouterModule.forChild(AUTH_ROUTES);