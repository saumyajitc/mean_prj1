import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-messages',
    template: `
        <app-message-input></app-message-input>
        <div class="row">
            <app-message-list></app-message-list>
        </div>
    `
})

export class MessagesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}