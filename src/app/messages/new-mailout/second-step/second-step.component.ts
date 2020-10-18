import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-second-step',
    templateUrl: './second-step.component.html',
    styleUrls: ['./second-step.component.scss'],
})
export class SecondStepComponent {
    @Input() formGroup: FormGroup;

    // todo вынести в сервис
    channelList = [
        { value: 0, viewValue: 'Канал раз'},
        { value: 1, viewValue: 'Канал два'},
    ];

    ruleList = [
        { value: 0, viewValue: 'Всем этим правилам'},
        { value: 1, viewValue: 'Подписавшиеся сегодня'},
        { value: 2, viewValue: 'Подписавшиеся вчера'},
    ];
}
