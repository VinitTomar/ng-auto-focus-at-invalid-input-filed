import {
  Directive,
  ElementRef,
  HostListener,
  QueryList,
  ContentChildren,
  Input,
  Host
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Directive({
  selector: '[appInvalidElmFocus]'
})
export class InvalidElmFocusDirective {
  @ContentChildren(NgModel, { descendants: true, read: ElementRef })
  inputFields: QueryList<ElementRef>;

  constructor(private _ngForm: NgForm) {}

  @HostListener('ngSubmit')
  onSubmit() {
    if (this._ngForm.valid) return;

    this._ngForm.control.markAllAsTouched();

    const invalidInputFields = this.inputFields.filter(field => {
      return (field.nativeElement as HTMLElement).classList.contains(
        'ng-invalid'
      );
    });

    invalidInputFields[0].nativeElement.focus();
  }
}
