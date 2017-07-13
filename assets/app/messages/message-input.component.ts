import { Message } from './message.model';
import { Component } from '@angular/core';

import { MessageService } from './message.service';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {

    constructor(private messageService: MessageService) {}

    onSave(_msg: string) {
        var message = new Message(_msg, 'Ravishanker');
        this.messageService.addMessage(message);
    }

}