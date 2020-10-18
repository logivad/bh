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
import { FirstStepExtrasComponent } from './new-mailout/first-step-extras/first-step-extras.component';
import { UiModule } from '../ui/ui.module';
import { SecondStepComponent } from './new-mailout/second-step/second-step.component';

@NgModule({
    declarations: [
        SentMessagesComponent,
        DraftMessagesComponent,
        NewMailoutComponent,
        MessageEditorComponent,
        FirstStepExtrasComponent,
        SecondStepComponent,
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
