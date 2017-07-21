import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger btn-xs" (click)="onLogOut()"> Logout </button>
        </div>
    `
})

export class LogoutComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    onLogOut() {
        this.authService.logOut();
        this.router.navigate(['/auth', 'signin']);
    }
}