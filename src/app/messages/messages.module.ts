import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import {MessagesRoutingModule} from './messages-routing.module';
import { DraftMessagesComponent } from './draft-messages/draft-messages.component';



@NgModule({
  declarations: [SentMessagesComponent, DraftMessagesComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
  ]
})
export class MessagesModule { }
