import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-cell-count',
    templateUrl: './cell-count.component.html',
    styleUrls: ['./cell-count.component.scss'],
})
export class CellCountComponent implements OnInit {
    @Input() count: number;

    @Input()
    @HostBinding('style.color')
    color: string;

    constructor() {}

    ngOnInit(): void {}
}
