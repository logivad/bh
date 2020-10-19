import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MessagesService} from '../../services/messages/messages.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-third-step',
    templateUrl: './third-step.component.html',
    styleUrls: ['./third-step.component.scss'],
})
export class ThirdStepComponent implements OnInit {
    @Input() formGroup: FormGroup;
    @Output() Send = new EventEmitter();

    tagList = [
        { value: 0, viewValue: 'Уведомление о событии' },
        { value: 1, viewValue: 'Уведомление о чём-то ещё' },
    ];

    constructor(private messagesService: MessagesService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {}
}
