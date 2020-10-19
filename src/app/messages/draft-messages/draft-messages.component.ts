import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';

@Component({
    selector: 'app-draft-messages',
    templateUrl: './draft-messages.component.html',
    styleUrls: ['./draft-messages.component.scss'],
})
export class DraftMessagesComponent implements OnInit {
    drafts: Array<{ id: string; title: string }> = [];

    constructor(private messagesService: MessagesService) {}

    ngOnInit(): void {
        this.messagesService.getDraftList().then(data => {
            this.drafts = data;
        });
    }

    draftClickHandler({ id }) {
        console.log('draftClickHandler', id);
    }
}
