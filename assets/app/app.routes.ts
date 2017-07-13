import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/messages' },
    { path: 'messages', component: MessagesComponent},
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);