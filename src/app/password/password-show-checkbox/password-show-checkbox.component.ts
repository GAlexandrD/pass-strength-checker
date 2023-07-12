import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-show-checkbox',
  templateUrl: './password-show-checkbox.component.html',
  styleUrls: ['./password-show-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PasswordShowCheckboxComponent,
      multi: true,
    },
  ],
})
export class PasswordShowCheckboxComponent implements ControlValueAccessor {
  isShow: boolean = false;
  disabled: boolean = false;
  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(obj: boolean): void {
    this.isShow = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setValue() {
    this.isShow = !this.isShow;
    this.onChange(this.isShow);
  }
}
