import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MessagesService } from '../services/messages/messages.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-new-mailout',
    templateUrl: './new-mailout.component.html',
    styleUrls: ['./new-mailout.component.scss'],
})
export class NewMailoutComponent implements OnInit {
    steps: FormGroup;
    firstStep: FormGroup;
    secondStep: FormGroup;
    thirdStep: FormGroup;
    canClickPrevButton = false;
    isLastStep = false;

    @ViewChild('stepper') stepper: MatHorizontalStepper;

    constructor(
        private fb: FormBuilder,
        private messagesService: MessagesService,
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
    ) {}

    ngOnInit() {
        this.firstStep = this.fb.group({
            message: ['Текст сообщения', Validators.required],
        });

        this.secondStep = this.fb.group({
            channel: ['', Validators.required],
            rules: [''],
        });

        this.thirdStep = this.fb.group({
            title: [''],
            facebookTag: [''],
            sendTime: [0],
        });

        this.steps = this.fb.group({
            // Для упрощения. На самом деле id будет назначаться при сохранении на сервере
            id: [Date.now()],

            firstStep: this.firstStep,
            secondStep: this.secondStep,
            thirdStep: this.thirdStep,
        });

        this.steps.valueChanges.subscribe(v => {
            console.log('steps', v);
        });

        const draftId = this.route.snapshot.queryParams.draft;

        if (draftId) {
            this.messagesService.getDraftById(draftId)
                .then((draft) => {
                    if (draft) {
                        this.steps.setValue(draft);
                    }
                });
        }
    }

    nextStep() {
        this.stepper.next();
    }

    prevStep() {
        this.stepper.previous();
    }

    selectionChangeHandler(e: StepperSelectionEvent) {
        this.canClickPrevButton = e.selectedIndex > 0;
        this.isLastStep = e.selectedIndex === this.stepper.steps.length - 1;
    }

    saveAndClose() {
        this.messagesService
            .saveDraft(this.steps.value)
            .then(() => {
                this.router.navigate(['../drafts'], { relativeTo: this.route });
            })
            .catch(e => {
                this.snackBar.open('Error! Cannot save draft', '', { duration: 3000 });
                console.error('Cannot save draft', e);
            });
    }

    cancel() {
        this.router.navigate(['../drafts'], { relativeTo: this.route });
    }

    send() {
        this.router.navigate(['../sent'], { relativeTo: this.route });
        this.messagesService.deleteDraft(this.steps.value.id);
    }
}
