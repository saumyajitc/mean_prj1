import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';

const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/messages' },
    { path: 'messages', component: MessagesComponent},
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule'}
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);