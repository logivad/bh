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
import { MessagesTableComponent } from './messages-table/messages-table.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CellNameComponent } from './messages-table/cell-name/cell-name.component';
import { TagFacebookComponent } from './messages-table/tag-facebook/tag-facebook.component';
import { CellStatusComponent } from './messages-table/cell-status/cell-status.component';
import { CellCountComponent } from './messages-table/cell-count/cell-count.component';

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
        MessagesTableComponent,
        CellNameComponent,
        TagFacebookComponent,
        CellStatusComponent,
        CellCountComponent,
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
