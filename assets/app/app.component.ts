import { Component } from '@angular/core';
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MessageService]
})
export class AppComponent {
    
    message: Message;

    handleEditClicked(event: string, message: Message) {
        this.message = message;
        this.message.content = "This is an edited message";
    }

}