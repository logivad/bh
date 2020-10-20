import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-cell-status',
    templateUrl: './cell-status.component.html',
    styleUrls: ['./cell-status.component.scss'],
})
export class CellStatusComponent implements OnInit {
    @Input() data: any;

    constructor() {}

    ngOnInit(): void {}
}
