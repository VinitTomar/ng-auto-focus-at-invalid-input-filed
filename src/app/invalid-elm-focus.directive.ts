import {
  Directive,
  ElementRef,
  HostListener,
  QueryList,
  ContentChildren
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Directive({
  selector: '[appInvalidElmFocus]'
})
export class InvalidElmFocusDirective {
  @ContentChildren(NgModel, { descendants: true, read: ElementRef })
  inputFields: QueryList<ElementRef>;

  @ContentChildren(NgModel, { descendants: true })
  ngModles: QueryList<NgModel>;

  constructor(private _ngForm: NgForm) {}

  @HostListener('ngSubmit')
  onSubmit() {
    if (this._ngForm.valid) return;

    this._ngForm.control.markAllAsTouched();

    for (let i = 0; i < this.ngModles.length; i++) {
      if (this.ngModles.get(i).control.errors) {
        this.inputFields.get(i).nativeElement.focus();
        break;
      }
    }
  }
}
