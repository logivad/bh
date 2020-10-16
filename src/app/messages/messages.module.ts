import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import {MessagesRoutingModule} from './messages-routing.module';



@NgModule({
  declarations: [SentMessagesComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
  ]
})
export class MessagesModule { }
