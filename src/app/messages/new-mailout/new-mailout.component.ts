import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatHorizontalStepper} from '@angular/material/stepper';
import {StepperSelectionEvent} from '@angular/cdk/stepper';

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

    @ViewChild('stepper') stepper: MatHorizontalStepper;

    constructor(private fb: FormBuilder) {}

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
            firstStep: this.firstStep,
            secondStep: this.secondStep,
            thirdStep: this.thirdStep,
        });

        this.steps.valueChanges.subscribe((v) => {
            console.log('steps', v);
        });
        const val = JSON.parse('{"firstStep":{"message":"Привет всем!"},"secondStep":{"channel":1,"rules":2},"thirdStep":{"title":"Заголовок","facebookTag":1,"sendTime":1}}');
        this.steps.setValue(val);
    }

    nextStep() {
        this.stepper.next();
    }

    prevStep() {
        this.stepper.previous();
    }

    selectionChangeHandler(e: StepperSelectionEvent) {
        this.canClickPrevButton = e.selectedIndex > 0;
    }
}
