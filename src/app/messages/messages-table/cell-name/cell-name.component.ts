import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-cell-name',
    templateUrl: './cell-name.component.html',
    styleUrls: ['./cell-name.component.scss'],
})
export class CellNameComponent implements OnInit {
    @Input() data: any;

    constructor() {}

    ngOnInit(): void {}
}
