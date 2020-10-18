import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-third-step',
    templateUrl: './third-step.component.html',
    styleUrls: ['./third-step.component.scss'],
})
export class ThirdStepComponent implements OnInit {
    @Input() formGroup: FormGroup;

    tagList = [
        { value: 0, viewValue: 'Уведомление о событии' },
        { value: 1, viewValue: 'Уведомление о чём-то ещё' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
