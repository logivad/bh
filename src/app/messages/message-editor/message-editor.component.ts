import {Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-message-editor',
    templateUrl: './message-editor.component.html',
    styleUrls: ['./message-editor.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MessageEditorComponent),
            multi: true
        }
    ]
})
export class MessageEditorComponent implements ControlValueAccessor {
    textarea: HTMLTextAreaElement;
    count = 0;

    @Input() maxCount: number;

    onChange = (_: any) => {};
    onTouched = () => {};

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    writeValue(value: any): void {
        const normalizedValue = value == null ? '' : value;
        this.textarea = this.textarea || this.elementRef.nativeElement.querySelector('textarea');
        this.renderer.setProperty(this.textarea, 'value', normalizedValue);
        this.count = value.length;
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.renderer.setProperty(this.textarea, 'disabled', isDisabled);
    }

    inputHandler(value: string): void {
        this.onChange(value);
        this.count = value.length;
    }

}
