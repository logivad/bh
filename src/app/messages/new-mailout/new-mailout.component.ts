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
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    canClickPrevButton = false;

    @ViewChild('stepper') stepper: MatHorizontalStepper;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.firstFormGroup = this.fb.group({
            message: ['Текст сообщения', Validators.required],
        });
        this.secondFormGroup = this.fb.group({
            channel: ['', Validators.required],
            rules: [''],
        });

        setInterval(() => {
            console.log(this.secondFormGroup.value);
        }, 2000);
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
