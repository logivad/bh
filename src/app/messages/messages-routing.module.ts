import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import { DraftMessagesComponent } from './draft-messages/draft-messages.component';

const routes: Routes = [
    {
        path: 'sent',
        component: SentMessagesComponent,
    },
    {
        path: 'drafts',
        component: DraftMessagesComponent,
    },
    { path: '**', redirectTo: 'sent' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MessagesRoutingModule {}
