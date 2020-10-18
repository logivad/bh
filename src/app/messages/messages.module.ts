import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { DraftMessagesComponent } from './draft-messages/draft-messages.component';
import { UiMaterialModule } from '../material.module';
import { NewMailoutComponent } from './new-mailout/new-mailout.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { UiModule } from '../ui/ui.module';
import { SecondStepComponent } from './new-mailout/second-step/second-step.component';
import { FirstStepComponent } from './new-mailout/first-step/first-step.component';
import { ThirdStepComponent } from './new-mailout/third-step/third-step.component';
import { MessagesHeaderComponent } from './messages-header/messages-header.component';

@NgModule({
    declarations: [
        SentMessagesComponent,
        DraftMessagesComponent,
        NewMailoutComponent,
        MessageEditorComponent,
        SecondStepComponent,
        FirstStepComponent,
        ThirdStepComponent,
        MessagesHeaderComponent,
    ],
    imports: [
        CommonModule,
        MessagesRoutingModule,
        UiMaterialModule,
        MatStepperModule,
        ReactiveFormsModule,
        UiModule,
    ],
})
export class MessagesModule {}
