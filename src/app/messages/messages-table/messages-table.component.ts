import { SelectionModel } from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MessagesService, SentMessage} from '../services/messages/messages.service';

@Component({
    selector: 'app-messages-table',
    templateUrl: './messages-table.component.html',
    styleUrls: ['./messages-table.component.scss'],
})
export class MessagesTableComponent implements OnInit {
    displayedColumns: string[] = ['select', 'name', 'status', 'sent', 'viewed', 'clicks', 'created', 'agent'];
    dataSource = new MatTableDataSource<SentMessage>();
    selection = new SelectionModel<SentMessage>(true, []);

    constructor(private messagesService: MessagesService) {
    }

    ngOnInit() {
        this.messagesService.getSentMessages()
            .then((data) => {
                this.dataSource.data = data;
            });
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: SentMessage): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${
            this.selection.isSelected(row) ? 'deselect' : 'select'
        } row`;
    }
}
